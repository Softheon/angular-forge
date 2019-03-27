import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormRendererConfig } from 'forge-lib/public_api';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    /**
     * The form group
     */
    public form: FormGroup;

    /**
     * The OAuth token which will be used by the Softheon Forge form rendering library
     */
    public get oauthToken() { return this.form.get('oauthToken'); }

    /**
     * The API endpoint for the Softheon Forge form rendering library
     */
    public get forgeApiUrl() { return this.form.get('forgeApiUrl'); }

    /**
     * The account name the entity template belongs to
     */
    public get accountName() { return this.form.get('accountName'); }

    /**
     * The name of the entity template to generate a form for
     */
    public get formName() { return this.form.get('formName'); }

    /**
     * The configuration for the form renderer
     */
    public formRendererConfig: FormRendererConfig;

    /**
     * Whether the form finished rendering
     */
    public didFinishRendering: boolean = true;

    /**
     * Default constructor.
     * @param fb Form builder
     */
    constructor(
        private fb: FormBuilder,
        private router: Router) { }

    /**
     * Initializes the component
     */
    public ngOnInit(): void {
        this.form = this.fb.group({
            oauthToken: ['', Validators.required],
            forgeApiUrl: ['https://localhost/Forge', Validators.required],
            accountName: ['Forge', Validators.required],
            formName: ['Airplane', Validators.required]
        });
    }

    /**
     * Renders the form
     */
    public renderForm(): void {
        if (!this.form.valid) {
            this.markFormGroupTouched(this.form);
            return;
        }

        this.didFinishRendering = false;

        this.formRendererConfig = {
            oauthToken: this.oauthToken.value.trim(),
            forgeApiUrl: this.forgeApiUrl.value.trim(),
            accountName: this.accountName.value.trim(),
            formName: this.formName.value.trim(),
            displayFormName: false
        };
    }

    /**
     * Event handler for when form finishes rendering
     */
    public onFinishedRendering(finishedRendering: boolean) {
        this.didFinishRendering = finishedRendering;
    }

    /**
     * Event handler for form submitted successfully
     * @param res Form that was submitted
     */
    public formSubmitted(res: any) {
        this.router.navigate([`results`], { state: res });
    }

    /**
     * Marks the whole form group as dirty
     */
    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach((control: FormGroup) => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
}

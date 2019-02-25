import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormRendererConfig } from 'form-renderer-lib/public_api';

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
     * The OAuth token which will be used by the Process Studio form rendering library
     */
    public get oauthToken() { return this.form.get('oauthToken'); }

    /**
     * The API endpoint for hte process studio form rendering library
     */
    public get processStudioApiUrl() { return this.form.get('processStudioApiUrl'); }

    /**
     * The account name the entity template belongs to
     */
    public get accountName() { return this.form.get('accountName'); }

    /**
     * The name of the entity template to generate a form for
     */
    public get entityTemplateName() { return this.form.get('entityTemplateName'); }

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
            processStudioApiUrl: ['https://localhost/ProcessStudio', Validators.required],
            accountName: ['Process Studio', Validators.required],
            entityTemplateName: ['Airplane', Validators.required]
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
            processStudioApiUrl: this.processStudioApiUrl.value.trim(),
            accountName: this.accountName.value.trim(),
            entityTemplateName: this.entityTemplateName.value.trim()
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

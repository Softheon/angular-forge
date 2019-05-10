import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderConfig } from 'projects/forge-lib/src/lib/configs/form-builder-lib-config';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

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

  public formBuilderConfig: FormBuilderConfig;

  /**
   * Default constructor.
   * @param fb Form builder
   */
  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      oauthToken: ['', Validators.required],
      forgeApiUrl: ['https://mc2-reg-mswb-01.softheon.com/Forge', Validators.required],
      accountName: ['2', Validators.required],
      formName: ['']
    });
  }

  /**
   * Renders the form
   */
  public setConfigs(): void {
    if (!this.form.valid) {
      this.markFormGroupTouched(this.form);
      return;
    }

    this.formBuilderConfig = {
      oauthToken: this.oauthToken.value.trim(),
      forgeApiUrl: this.forgeApiUrl.value.trim(),
      accountName: this.accountName.value.trim(),
      formName: this.formName.value.trim()
    };
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

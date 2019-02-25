import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntityTemplateModel } from './models/entityTemplateModel';
import { FormRendererConfig } from './config/form-renderer-lib-config';

@Component({
  selector: 'process-studio-form-renderer-lib',
  templateUrl: './form-renderer-lib.component.html',
  styleUrls: ['./form-renderer-lib.component.scss']
})
export class FormRendererLibComponent implements OnInit, OnChanges {

  /**
   * The configuration for the form rendering library
   */
  @Input() public formRendererConfig: FormRendererConfig;

  /**
   * Emits to the parent component whether the form renderer has finished rendering
   */
  @Output() public finishedRendering = new EventEmitter<boolean>();

  /**
   * Emits to the parent component whether the form has finished submitting and includes the form submission results
   */
  @Output() public formSubmitted = new EventEmitter<any>();

  /**
   * Gets the form control for the entity name input
   */
  public get entityName() { return this.entityForm.get('entityName'); }

  /**
   * The entity form group
   */
  public entityForm: FormGroup;

  /**
   * Whether the form finished rendering
  */
  public didFinishRendering: boolean = false;

  /**
   * The entity template model
   */
  public entityTemplateModel: EntityTemplateModel;

  /**
   * Constructs the component
   * @param http The HTTP Client
   * @param fb The form builder
   */
  constructor(
    private http: HttpClient,
    private fb: FormBuilder) { }

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.entityForm = this.fb.group({
      entityName: ['', Validators.required]
    });
    this.renderForm();
  }

  /**
   * Rerenders the form on input changes
   * @param changes The changes
   */
  public ngOnChanges(_changes: SimpleChanges): void {
    this.renderForm();
  }

  /**
   * Renders the form
   */
  public async renderForm(): Promise<void> {
    this.validateInputs();

    this.didFinishRendering = false;
    this.finishedRendering.emit(false);
    this.entityTemplateModel = await this.GetEntityTemplate();
    this.didFinishRendering = true;
    this.finishedRendering.emit(true);
  }

  /**
   * Submits the form and creates a new entity
   */
  public async submit(): Promise<void> {
    if (!this.entityForm.valid) {
      this.markFormGroupTouched(this.entityForm);
      return;
    }

    // Let the parent component know we are submitting the form
    this.didFinishRendering = false;
    this.finishedRendering.emit(false);

    // Create the submission form and submit it
    const submissionForm = this.createSubmissionForm();
    const res = await this.CreateEntity(submissionForm);

    // Notify the parent compnent the form has been submitted
    this.didFinishRendering = true;
    this.finishedRendering.emit(true);
    this.formSubmitted.emit(res);
  }

  /**
   * Creates the form to be submitted
   */
  private createSubmissionForm(): any {
    const submissionForm: any = {};
    submissionForm.Name = (<HTMLInputElement>document.getElementById('entityName')).value;

    for (let i = 0; i < this.entityTemplateModel.profiles.length; i++) {
      const profileTemplate = this.entityTemplateModel.profiles[i];
      submissionForm[profileTemplate.name] = {};

      for (let j = 0; j < profileTemplate.fields.length; j++) {
        const fieldTemplate = profileTemplate.fields[j];
        const fieldInput = (<HTMLInputElement>document.getElementById(fieldTemplate.name));

        if (fieldTemplate.type === 'Integer' || fieldTemplate.type === 'Double') {
          submissionForm[profileTemplate.name][fieldTemplate.name] = +fieldInput.value;
        } else if (fieldTemplate.type === 'String') {
          submissionForm[profileTemplate.name][fieldTemplate.name] = fieldInput.value;
        } else if (fieldTemplate.type === 'DateTime') {
          if (fieldInput.value !== '') {
            submissionForm[profileTemplate.name][fieldTemplate.name] = new Date(fieldInput.value);
          } else {
            submissionForm[profileTemplate.name][fieldTemplate.name] = '0001-01-01T00:00:00Z';
          }
        }
      }
    }

    return submissionForm;
  }

  /**
   * Validates all required fields to render the form have been passed by the parent component
   */
  private validateInputs(): void {
    if (!this.formRendererConfig.processStudioApiUrl) {
      throw new Error('Process Studio API URL is required.');
    }

    if (!this.formRendererConfig.accountName) {
      throw new Error('Account Name is required.');
    }

    if (!this.formRendererConfig.entityTemplateName) {
      throw new Error('Entity Template Name is required.');
    }

    if (!this.formRendererConfig.oauthToken) {
      throw new Error('OAuth Token is required.');
    }
  }

  /**
   * Calls the Process Studio API to retrieve the entity template model for the entity template specified by the parent component
   */
  private async GetEntityTemplate(): Promise<EntityTemplateModel> {
    const headers = this.getHeader();
    const fullUri = `${this.formRendererConfig.processStudioApiUrl}/v1/entityTemplate/${this.formRendererConfig.accountName}/${this.formRendererConfig.entityTemplateName}`;

    return this.http.get<EntityTemplateModel>(fullUri, { headers: headers })
      .toPromise()
      .then(value => {
        return value as EntityTemplateModel;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  /**
   * Calls the Process Studio API to create a new entity
   * @param request The entity to create
   */
  private async CreateEntity(request: any): Promise<any> {
    const headers = this.getHeader();
    const fullUri = `${this.formRendererConfig.processStudioApiUrl}/v1/${this.formRendererConfig.accountName}/${this.formRendererConfig.entityTemplateName}`;

    return this.http.post<any>(fullUri, request, { headers: headers })
      .toPromise()
      .then(value => {
        return value;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  /**
   * Crates a new HTTP Headers which includes the OAuth Token
   */
  private getHeader(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.formRendererConfig.oauthToken}` });
  }

  /**
   * Pads number with at least one decimal point.
   * @param num The number to pad
   */
  private addZeroes(num: string): number {
    // Convert input string to a number and store as a variable.
    let value = Number(num);
    // Split the input string into two arrays containing integers/decimals
    const res = num.split('.');
    // If there is no decimal point or only one decimal place found.
    if (res.length === 1 || res[1].length < 3) {
      // Set the number to two decimal places
      value = +value.toFixed(1);
    }
    // Return updated or original number.
    return value;
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

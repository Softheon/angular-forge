import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntityTemplateModel } from '../../../../shared/models/entityTemplateModel';
import { FormRendererConfig } from '../../../../configs/form-renderer-lib-config';
import { ForgeService } from '../../../../core/services/forge.service';
import { FieldTemplateModel } from '../../../../shared/models/fieldTemplateModel';
import { FieldType } from '../../../../shared/models/field-type';

@Component({
  selector: 'forge-form-renderer',
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
   * @param fb The form builder
   */
  constructor(
    private fb: FormBuilder,
    private forgeService: ForgeService) { }

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.entityForm = this.fb.group({
      entityName: ['', this.formRendererConfig.displayFormName ? Validators.required : []]
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
    this.forgeService.formRendererConfig = this.formRendererConfig;
    this.validateInputs();

    this.didFinishRendering = false;
    this.finishedRendering.emit(false);
    this.entityTemplateModel = await this.forgeService.getEntityTemplate();
    this.entityTemplateModel.profiles.forEach(profile => {
      for (let i = 0; i < profile.fields.length; i++) {
        if (profile.fields[i].type == "Table") {
          profile.fields[i].data = [];
          profile.fields[i].data.push(profile.fields[i].fields);
        }
      }
    });
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
    const res = await this.forgeService.createEntity(submissionForm);

    // Notify the parent compnent the form has been submitted
    this.didFinishRendering = true;
    this.finishedRendering.emit(true);
    this.formSubmitted.emit(res);
  }

  public addDataRow(profileIndex: number, fieldIndex: number): void {
    this.entityTemplateModel.profiles[profileIndex].fields[fieldIndex].data.push(this.entityTemplateModel.profiles[profileIndex].fields[fieldIndex].fields)
  }

  /**
   * Creates the form to be submitted
   */
  private createSubmissionForm(): any {
    const submissionForm: any = {};
    if (this.formRendererConfig.displayFormName) {
      submissionForm.Name = (<HTMLInputElement>document.getElementById('entityName')).value;
    } else {
      submissionForm.Name = `${new Date(Date.now()).toLocaleString()} - ${this.entityTemplateModel.name}`;
    }

    console.log(this.entityTemplateModel);
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
        else if (fieldTemplate.type === 'ListBox') {
          submissionForm[profileTemplate.name][fieldTemplate.name] = fieldInput.value;
        }
        else if (fieldTemplate.type === 'Table') {
          submissionForm[profileTemplate.name][fieldTemplate.name] = []
          let index = 0;
          fieldTemplate.data.forEach(fieldVal => {
            let tableData: any = {}
            fieldVal.forEach(field => {
              const tableFieldInput = (<HTMLInputElement>document.getElementById(index + field.name));
              if (field.type === 'Integer' || field.type === 'Double') {
                tableData[field.name] = +tableFieldInput.value;
              } else if (field.type === 'String') {
                tableData[field.name] = tableFieldInput.value;
              } else if (field.type === 'DateTime') {
                if (tableFieldInput.value !== '') {
                  tableData[field.name] = new Date(tableFieldInput.value);
                } else {
                  tableData[field.name] = '0001-01-01T00:00:00Z';
                }
              }
            });
            index++;
            submissionForm[profileTemplate.name][fieldTemplate.name].push(tableData);
          });
        }
      }
    }
    return submissionForm;
  }

  /**
   * Validates all required fields to render the form have been passed by the parent component
   */
  private validateInputs(): void {
    if (!this.formRendererConfig.forgeApiUrl) {
      throw new Error('Softheon Forge API URL is required.');
    }

    if (!this.formRendererConfig.accountName) {
      throw new Error('Account Name is required.');
    }

    if (!this.formRendererConfig.formName) {
      throw new Error('Entity Template Name is required.');
    }

    if (!this.formRendererConfig.oauthToken) {
      throw new Error('OAuth Token is required.');
    }
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

import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { FormRendererConfig } from '../../../../configs/form-renderer-lib-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../../../../../lib/core/services/forms.service';

@Component({
  selector: 'custom-forge-form-renderer',
  templateUrl: './custom-form-renderer-lib.component.html',
  styleUrls: ['./custom-form-renderer-lib.component.css']
})
export class CustomFormRendererLibComponent implements OnInit {
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
   * The entity form group
   */
  public entityForm: FormGroup;

  /**
   * list of entity names
   */
  public entityNames: string[] = [];

  /**
   * Whether the form finished rendering
  */
  public didFinishRendering: boolean = false;

  /**
   * Constructs the component
   * @param fb The form builder
   */
  constructor(
    private fb: FormBuilder,
    // private resolver: ComponentFactoryResolver,
    public formsService: FormsService) { }

  /**
   * Initializes the component
   */
  public async ngOnInit(): Promise<void> {
    this.entityForm = this.fb.group({
      entityName: ['', this.formRendererConfig.displayFormName ? Validators.required : []]
    });
    this.formsService.formBuilderConfig = this.formRendererConfig;
    if (this.formsService.formBuilderConfig) {
      await this.renderForm();
    }
  }

  /**
   * Renders the form
   */
  public async renderForm(): Promise<void> {
    this.didFinishRendering = false;
    this.finishedRendering.emit(false);

    this.formsService.getForm(this.formRendererConfig.formName).then((res) => {
      this.didFinishRendering = true;
      this.finishedRendering.emit(true);
    });
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
    let submissionForms = await this.createSubmissionForm();
    let results = [];
    for (let i = 0; i < this.entityNames.length; i++) {
      this.formsService.createEntity(this.entityNames[i], submissionForms[i][this.entityNames[i]]).then((res) => {
        results.push(res);
      })
    }
    // Notify the parent component the form has been submitted
    this.didFinishRendering = true;
    this.finishedRendering.emit(true);
    // this.formSubmitted.emit(results);
  }

  /**
   * Creates the form to be submitted
   */
  private async createSubmissionForm(): Promise<any[]> {
    const submissionForms: any = [];
    let createdFormValue = false;
    // Loop through each of the components in your form
    for (let i = 0; i < this.formsService.form.components.length; i++) {
      let component = this.formsService.form.components[i];
      // If the form value doesn't have a value in it's api field skip it
      if (component.api.entityTemplateName) {
        // If we have a submission form for the template
        for (let x = 0; x < this.entityNames.length; x++) {
          if (submissionForms[x][component.api.entityTemplateName]) {
            // if the submission forms profile doesn't exist create it
            if (!submissionForms[x][component.api.entityTemplateName][component.api.profileName]) {
              submissionForms[x][component.api.entityTemplateName][component.api.profileName] = {}
            }
            //Add the field name and it's value to the submission form
            submissionForms[x][component.api.entityTemplateName][component.api.profileName][component.api.fieldName] = component.getValue();
            createdFormValue = true;
          }
        }
        //if the list of submissions doesn't have one for the template the component is trying to update create one and add everything
        if (!createdFormValue) {
          let res = await this.formsService.getEntityTemplate(component.api.entityTemplateName);
          let submissionForm = {};
          submissionForm[res.name] = {};
          this.entityNames.push(res.name)
          if (this.formRendererConfig.displayFormName) {
            submissionForm[res.name].Name = (<HTMLInputElement>document.getElementById('entityName')).value;
          } else {
            submissionForm[res.name].Name = `${new Date(Date.now()).toLocaleString()} - ${res.name}`;
          }
          submissionForm[res.name][component.api.profileName] = {}
          submissionForm[res.name][component.api.profileName][component.api.fieldName] = component.getValue();
          submissionForms.push(submissionForm);
        }
      }
    }
    return submissionForms;
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

  /**
   * tracker for re-rendering *ngFor
   * @param index index of the item
   * @param item the component;
   */
  public trackComponentById(index, item): any {
    return item.id;
  }
}

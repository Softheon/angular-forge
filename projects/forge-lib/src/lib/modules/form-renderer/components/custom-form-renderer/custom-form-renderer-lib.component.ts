import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { FormRendererConfig } from 'projects/forge-lib/src/public_api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntityTemplateModel } from 'projects/forge-lib/src/lib/shared/models/entityTemplateModel';
import { FormsService } from 'projects/forge-lib/src/lib/core/services/forms.service';

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
    // private resolver: ComponentFactoryResolver,
    public formsService: FormsService) { }

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.entityForm = this.fb.group({
      entityName: ['', this.formRendererConfig.displayFormName ? Validators.required : []]
    });
    this.formsService.formBuilderConfig = this.formRendererConfig;
    this.renderForm();
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
  }

  /**
   * Creates the form to be submitted
   */
  private createSubmissionForm(): any {

  }

  /**
   * Validates all required fields to render the form have been passed by the parent component
   */
  private validateInputs(): void {
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

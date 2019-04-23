import { Component, OnInit, Inject, OnDestroy, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsService } from '../../../../../lib/core/services/forms.service';
import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { getRegistryType } from '../../../../shared/form-editor-components/field-editor-registry';
import { ProfileTemplateModel } from '../../../../shared/models/profileTemplateModel';
import { EntityTemplateModel } from '../../../../shared/models/entityTemplateModel';
import { FieldTemplateModel } from '../../../../shared/models/fieldTemplateModel';

@Component({
  selector: 'forge-renderer-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent implements OnInit, OnDestroy {

  /**
   * View child for display tab
   */
  @ViewChild('vcDisplay', { read: ViewContainerRef }) vcDisplay: ViewContainerRef;

  /**
   * View child for data tab
   */
  @ViewChild('vcData', { read: ViewContainerRef }) vcData: ViewContainerRef;

  /**
   * View child for validation tab
   */
  @ViewChild('vcValidation', { read: ViewContainerRef }) vcValidation: ViewContainerRef;

  /**
   * the form component
   */
  public field: FormComponent;

  /**
   * The profile that has been selected
   */
  public selectedProfile: ProfileTemplateModel;

  /**
   * The selected entity template
   */
  public selectedEntity: EntityTemplateModel;

  /**
   * The selected field template
   */
  public selectedField: FieldTemplateModel;

  /**
   * the current index
   */
  public index = 0;

  /**
   * whether or not we are editing the field
   */
  public isEdit: Boolean = false;

  /**
   * the display component name
   */
  public displayName = '';

  /**
   * the data component name
   */
  public dataName = '';

  /**
   * the validation component name
   */
  public validationName = '';

  /**
   * whether or not to show the abstract fields for the display tab
   */
  public showAbstractDisplay = true;

  /**
   * whether or not to show the abstract fields for the data tab
   */
  public showAbstractData = true;

  /**
   * whether or not to show the abstract fields for the data tab
   */
  public showAbstractValidation = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private resolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<FieldEditorComponent>,
    public formsService: FormsService
  ) {
    this.isEdit = data.isEdit;
    this.field = data.field;
  }

  /**
   * Actions to take on the init life-cycle
   */
  public ngOnInit(): void {
    this.setDynamicComponents();
  }

  /**
     * actions to take on the destroy life-cycle
     */
  public ngOnDestroy(): void {
    // if (!this.isEdit) {
    //   this.formsService.form.components.push(this.field)
    // }
    if (this.dialogRef.close) {
      this.dialogRef.close(this.field);
    }
  }

  /**
   * Selects the entity template
   */
  public selectEntityTemplate(): void {
    for (let i = 0; i < this.formsService.entities.length; i++) {
      if (this.formsService.entities[i].name === this.field.api.entityTemplateName) {
        this.formsService.getEntityTemplate(this.field.api.entityTemplateName).then((result) => {
          this.selectedEntity = result;
        });
      }
    }
  }

  /**
   * Selects the entity profile
   */
  public selectEntityProfile(): void {
    for (let i = 0; i < this.selectedEntity.profiles.length; i++) {
      if (this.selectedEntity.profiles[i].name === this.field.api.profileName) {
        this.selectedProfile = this.selectedEntity.profiles[i];
      }
    }
  }

  /**
   * Selects the entity field
   */
  public selectEntityField(): void {
    for (let i = 0; i < this.selectedProfile.fields.length; i++) {
      if (this.selectedProfile.fields[i].name === this.field.api.fieldName) {
        this.field.api.options = this.selectedProfile.fields[i].options.slice(1, this.selectedProfile.fields[i].options.length);
      }
    }
  }

  /**
   * Set which dynamic components to render
   */
  private setDynamicComponents(): void {
    switch (this.field.type) {
      case 'Text Field': {
        this.displayName = 'TextFieldEditorDisplayComponent';
        this.dataName = 'TextFieldEditorDataComponent';
        this.validationName = 'TextFieldEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case 'Number': {
        this.displayName = 'NumberEditorDisplayComponent';
        this.dataName = 'NumberEditorDataComponent';
        this.validationName = 'NumberEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case 'Text Area': {
        this.displayName = 'TextAreaEditorDisplayComponent';
        this.dataName = 'TextAreaEditorDataComponent';
        this.validationName = 'TextAreaEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case 'Checkbox': {
        this.displayName = 'CheckboxEditorDisplayComponent';
        this.dataName = 'CheckboxEditorDataComponent';
        this.validationName = 'CheckboxEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = false;
        this.showAbstractValidation = true;
        break;
      }
      case 'Email': {
        this.displayName = 'EmailEditorDisplayComponent';
        this.dataName = 'EmailEditorDataComponent';
        this.validationName = 'EmailEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case 'Rating': {
        this.displayName = 'RatingEditorDisplayComponent';
        this.dataName = 'RatingEditorDataComponent';
        this.validationName = 'RatingEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case 'Attachment': {
        this.displayName = 'AttachmentEditorDisplayComponent';
        this.dataName = 'AttachmentEditorDataComponent';
        this.validationName = 'AttachmentEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = false;
        this.showAbstractValidation = false;
        break;
      }
      case 'Checkbox Group': {
        this.displayName = 'MultiSelectEditorDisplayComponent';
        this.dataName = 'MultiSelectEditorDataComponent';
        this.validationName = 'MultiSelectEditorValidationComponent';
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
      }
    }

    this.createDynamicComponents(this.displayName, this.vcDisplay);
    this.createDynamicComponents(this.dataName, this.vcData);
    this.createDynamicComponents(this.validationName, this.vcValidation);
  }

  /**
   * Create the dynamic components
   * @param name the name of the component to render
   * @param vc the view container to render too
   */
  private createDynamicComponents(name: string, vc: ViewContainerRef): void {
    const factory = this.resolver.resolveComponentFactory(getRegistryType(name));
    vc.clear();
    const newComponent = vc.createComponent(factory);
    newComponent.instance.component = this.field;
  }
}

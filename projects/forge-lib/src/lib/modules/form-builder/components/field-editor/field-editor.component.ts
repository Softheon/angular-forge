import { Component, OnInit, Inject, OnDestroy, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsService } from '../../../../../lib/core/services/forms.service';
import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { getRegistryType } from '../../../../shared/form-editor-components/field-editor-registry';

@Component({
  selector: 'forge-renderer-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent {

  @ViewChild('vcDisplay', { read: ViewContainerRef }) vcDisplay: ViewContainerRef;

  @ViewChild('vcData', { read: ViewContainerRef }) vcData: ViewContainerRef;

  @ViewChild('vcValidation', { read: ViewContainerRef }) vcValidation: ViewContainerRef;

  public field: FormComponent;

  public index = 0;

  public isEdit: Boolean = false;

  public displayName = "";

  public dataName = "";

  public validationName = "";

  public showAbstractDisplay = true;

  public showAbstractData = true;

  public showAbstractValidation = true;


  //TODO:: Figure out why using data: FormComponent throws weird compilation errors

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private resolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<FieldEditorComponent>,
    public formsService: FormsService
  ) {
    this.isEdit = data.isEdit;
    this.field = data.field;
  }

  public ngOnInit(): void {
    console.log(this.field);
    this.setDynamicComponents();
  }

  public ngOnDestroy(): void {
    if (!this.isEdit) {
      this.formsService.components.push(this.field)
    }
    this.dialogRef.close(this.field);
  }

  private setDynamicComponents(): void {
    switch (this.field.type) {
      case "Text Field": {
        this.displayName = "TextFieldEditorDisplayComponent";
        this.dataName = "TextFieldEditorDataComponent";
        this.validationName = "TextFieldEditorValidationComponent";
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case "Number": {
        this.displayName = "NumberEditorDisplayComponent";
        this.dataName = "NumberEditorDataComponent";
        this.validationName = "NumberEditorValidationComponent";
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case "Text Area": {
        this.displayName = "TextAreaEditorDisplayComponent";
        this.dataName = "TextAreaEditorDataComponent";
        this.validationName = "TextAreaEditorValidationComponent";
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case "Checkbox": {
        this.displayName = "CheckboxEditorDisplayComponent";
        this.dataName = "CheckboxEditorDataComponent";
        this.validationName = "CheckboxEditorValidationComponent";
        this.showAbstractDisplay = true;
        this.showAbstractData = false;
        this.showAbstractValidation = true;
        break;
      }
      case "Email": {
        this.displayName = "EmailEditorDisplayComponent";
        this.dataName = "EmailEditorDataComponent";
        this.validationName = "EmailEditorValidationComponent";
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      case "Rating": {
        this.displayName = "RatingEditorDisplayComponent";
        this.dataName = "RatingEditorDataComponent";
        this.validationName = "RatingEditorValidationComponent";
        this.showAbstractDisplay = true;
        this.showAbstractData = true;
        this.showAbstractValidation = true;
        break;
      }
      default: {
        break;
      }
    }

    this.createDynamicComponents(this.displayName, this.vcDisplay);
    this.createDynamicComponents(this.dataName, this.vcData);
    this.createDynamicComponents(this.validationName, this.vcValidation);
  }

  private createDynamicComponents(name: string, vc: ViewContainerRef): void {
    const factory = this.resolver.resolveComponentFactory(getRegistryType(name));
    vc.clear();
    const newComponent = vc.createComponent(factory);
    newComponent.instance.component = this.field;
  }
}

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

  @ViewChild('vcEditor', { read: ViewContainerRef }) vc: ViewContainerRef;

  public field: FormComponent;

  public index = 0;

  public isEdit: Boolean = false;

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
    let name = "TextFieldEditorComponent";

    //Match the type to the editor value
    switch (this.field.type) {
      case "Text Field": {
        name = "TextFieldEditorComponent";
        break;
      }
      case "Number": {
        name = "NumberEditorComponent";
        break;
      }
      case "Text Area": {
        name = "TextAreaEditorComponent";
        break;
      }
      case "Checkbox": {
        name = "CheckboxEditorComponent";
        break;
      }
      default: {
        break;
      }
    }

    const factory = this.resolver.resolveComponentFactory(getRegistryType(name));
    this.vc.clear();

    const newComponent = this.vc.createComponent(factory);
 
    newComponent.instance.component = this.field;    
  }

  public ngOnDestroy(): void {
    if (!this.isEdit) {
      this.formsService.components.push(this.field)
    }
    this.dialogRef.close(this.field);
  }
}

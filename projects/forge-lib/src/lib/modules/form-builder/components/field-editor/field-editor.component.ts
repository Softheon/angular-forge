import { Component, Inject, OnDestroy } from '@angular/core';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'forge-renderer-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent {

  public field: TextFieldComponent;

  //TODO:: Figure out why using data: FormComponent throws weird compilation errors

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<FieldEditorComponent>
  ) {
    this.field = data.field;
  }
}

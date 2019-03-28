import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { TextFieldFormComponent } from '../../../../shared/form-components/concrete/text-field-form-component/text-field.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'forge-renderer-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent implements OnDestroy {

  public field: TextFieldFormComponent;

  //TODO:: Figure out why using data: FormComponent throws weird compilation errors

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<FieldEditorComponent>
  ) {
    this.field = data.field;
  }

  ngOnDestroy(): void {
    this.dialogRef.close(this.field);
  }
}

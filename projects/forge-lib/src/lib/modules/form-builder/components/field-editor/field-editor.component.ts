import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { TextFieldFormComponent } from '../../../../shared/form-components/concrete/text-field-form-component/text-field.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsService } from '../../../../../lib/core/services/forms.service';

@Component({
  selector: 'forge-renderer-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent implements OnDestroy {

  public field: TextFieldFormComponent;

  public index = 0;

  public isEdit: Boolean = false;

  //TODO:: Figure out why using data: FormComponent throws weird compilation errors

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<FieldEditorComponent>,
    public formsService: FormsService
  ) {
    this.isEdit = data.isEdit;
    this.field = data.field;
  }

  ngOnDestroy(): void {
    if (!this.isEdit) {
      this.formsService.components.push(this.field)
    }
    this.dialogRef.close(this.field);
  }
}

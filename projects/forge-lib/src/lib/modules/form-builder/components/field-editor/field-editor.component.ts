import { Component, OnInit, Inject } from '@angular/core';
import { TextFieldFormComponent } from '../../../../shared/form-components/concrete/text-field-form-component/text-field.component';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'forge-renderer-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent implements OnInit {

  public field: TextFieldFormComponent;

  //TODO:: Figure out why using data: FormComponent throws weird compilation errors

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any
    ) {
    this.field = data.field;
    this.field.display.hideLabel = false;
  }

  ngOnInit() {
    console.log(this.field);
  }

  ngOnDestroy(): void {
    console.log(this.field)    
  }
}

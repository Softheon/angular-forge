import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { TextFieldFormComponent } from '../../../../shared/form-components/concrete/text-field-form-component/text-field.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FieldEditorComponent } from '../field-editor/field-editor.component';


@Component({
  selector: 'forge-form-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  private index: number = 0;
  public components: Array<string> = [
    'Text Field',
    'Number Field'
  ];

  public dialogRef: MatDialogRef<any>;



  public forgeComponents: Array<FormComponent> = [];

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer.id === 'components' && event.previousContainer === event.container) {
      return; // Prevent dragging within the components container
    } else if (event.previousContainer.id === 'forgeComponents' && event.previousContainer === event.container) {
      // TODO
    } else if (event.previousContainer.id === 'components' && event.previousContainer !== event.container) {
      const comp = new TextFieldFormComponent();
      comp.id = 'text_field_' + this.index++;
      comp.display.hideLabel = false;
      comp.display.label = "test";
      // this.dialogRef = this.dialog.open(FieldEditorComponent, {
      //   data: {
      //     field: comp,
      //   },
      //   width: "80vw"
      // });
      this.forgeComponents.push(comp);
    }
  }

  public noReturnPredicate(): boolean {
    return false;
  }
}

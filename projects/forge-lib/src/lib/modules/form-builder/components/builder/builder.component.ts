import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material';

import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { NumberComponent } from '../../../../shared/form-components/concrete/number/number.component';
import { FieldEditorComponent } from '../../../../modules/form-builder/components/field-editor/field-editor.component';
import { FormsService } from '../../../../core/services/forms.service';
import { TextAreaComponent } from '../../../../shared//form-components/concrete/text-area/text-area.component';
import { CheckboxComponent } from '../../../../shared/form-components/concrete/checkbox/checkbox.component';

@Component({
  selector: 'forge-form-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public index: number = 0;
  public components: Array<string> = [
    'Text Field',
    'Number Field',
    'Text Area',
    'Checkbox'
  ];

  public hovered: Boolean[] = [];

  public dialogRef: MatDialogRef<any>;

  public forgeComponents: Array<FormComponent> = [];

  constructor(private dialog: MatDialog,
    public formsService: FormsService) { }

  public ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer.id === 'components' && event.previousContainer === event.container) {
      return; // Prevent dragging within the components container
    } else if (event.previousContainer.id === 'forgeComponents' && event.previousContainer === event.container) {
      // TODO
    } else if (event.previousContainer.id === 'components' && event.previousContainer !== event.container) {
      this.hovered.push(false);
      if (event.previousContainer.data[event.previousIndex] === 'Text Field') {
        this.addComponent(new TextFieldComponent(), `text_field_${this.index++}`);
      } else if (event.previousContainer.data[event.previousIndex] === 'Number Field') {
        this.addComponent(new NumberComponent(), `number_${this.index++}`);
      } else if (event.previousContainer.data[event.previousIndex] === 'Text Area') {
        this.addComponent(new TextAreaComponent(), `text_area_${this.index++}`);
      } else if (event.previousContainer.data[event.previousIndex] === 'Checkbox') {
        this.addComponent(new CheckboxComponent(), `checkbox_${this.index++}`);
      }
    }
  }

  public noReturnPredicate(): boolean {
    return false;
  }

  public addComponent(component: any, id: string): void {
    component.id = id;
    this.forgeComponents.push(component);
  }

  public deleteComponent(index: number): void {
    console.log("deleting " + index);
    this.forgeComponents.splice(index, 1);
    this.formsService.components.splice(index, 1);

    console.log(this.forgeComponents);
  }

  public editComponent(index: number): void {
    this.dialogRef = this.dialog.open(FieldEditorComponent, {
      data: {
        field: this.formsService.components[index],
        isEdit: true
      },
      width: '80vw'
    });
  }
}

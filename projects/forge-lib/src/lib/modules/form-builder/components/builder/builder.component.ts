import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { TextFieldFormComponent } from '../../../../shared/form-components/concrete/text-field-form-component/text-field.component';
import { NumberComponent } from '../../../../shared/form-components/concrete/number/number.component';

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

  public forgeComponents: Array<FormComponent> = [];

  constructor() { }

  public ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer.id === 'components' && event.previousContainer === event.container) {
      return; // Prevent dragging within the components container
    } else if (event.previousContainer.id === 'forgeComponents' && event.previousContainer === event.container) {
      // TODO
    } else if (event.previousContainer.id === 'components' && event.previousContainer !== event.container) {
      if (event.previousContainer.data[event.previousIndex] === 'Text Field') {
        this.addComponent(new TextFieldFormComponent(), `text_field_${this.index++}`);
      } else if (event.previousContainer.data[event.previousIndex] === 'Number Field') {
        this.addComponent(new NumberComponent(), `number_${this.index++}`);
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
}

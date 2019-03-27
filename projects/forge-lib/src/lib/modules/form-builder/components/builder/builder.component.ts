import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { TextFieldFormComponent } from '../../../../shared/form-components/concrete/text-field-form-component/text-field.component';

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
      const comp = new TextFieldFormComponent();
      comp.id = 'text_field_' + this.index++;
      this.forgeComponents.push(comp);
    }
  }

  public noReturnPredicate(): boolean {
    return false;
  }
}

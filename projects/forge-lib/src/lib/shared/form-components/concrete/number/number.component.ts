import { Component } from '@angular/core';

import { TextFieldFormComponent } from '../text-field-form-component/text-field.component';
import { NumberData } from './number-data';
import { FormData } from '../../abstract/form-data';

@Component({
  selector: 'forge-builder-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends TextFieldFormComponent {
  /**
   * Data attributes
   */
  public data: FormData = new NumberData();

  /**
   * Gets the value of the component
   */
  public getValue(): string {
    return this.value;
  }
}

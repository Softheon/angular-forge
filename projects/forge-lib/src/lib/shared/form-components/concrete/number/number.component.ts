import { Component, OnInit } from '@angular/core';

import { NumberData } from './number-data';
import { NumberValidation } from './number-validation';
import { FormComponent } from '../../abstract/form-component';
import { TextFieldDisplay } from '../text-field/text-field-display';

@Component({
  selector: 'forge-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends FormComponent implements OnInit {
  /**
   * ID of the component
   */
  id: string;

  /**
   * Component type
   */
  public type: string = 'Number';

  /**
   * Form display attributes
   */
  public display: TextFieldDisplay = new TextFieldDisplay();

  /**
   * Data attributes
   */
  public data: NumberData = new NumberData();

  /**
   * Number validation attributes
   */
  public validation: NumberValidation = new NumberValidation();

  /**
   * Value model
   */
  public value: string;

  /**
   * Gets the value of the component
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.value = this.data.defaultValue;

    if (!this.display.label) {
      this.display.label = 'Number';
    }
  }
}

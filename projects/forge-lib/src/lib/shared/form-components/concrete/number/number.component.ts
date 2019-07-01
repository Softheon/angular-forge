import { Component, OnInit } from '@angular/core';

import { NumberData } from './number-data';
import { NumberValidation } from './number-validation';
import { FormComponent } from '../../abstract/form-component';
import { TextFieldDisplay } from '../text-field/text-field-display';
import { FormApi } from '../../abstract/form-api';
import { ComponentTypes } from '../../../constants/component-types';
import { FormConditional } from '../../abstract/form-conditional';

@Component({
  selector: 'forge-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends FormComponent implements OnInit {
  /**
   * ID of the component
   */
  public id: string;

  /**
   * Component type
   */
  public type: string = ComponentTypes.NumberField;

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
   * Api data attributes
   */
  public api: FormApi = new FormApi();

  /**
   * Conditional attributes
   */
  public conditional: FormConditional = new FormConditional();

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

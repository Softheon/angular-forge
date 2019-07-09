import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { FormApi } from '../../abstract/form-api';
import { MultiSelectDisplay } from './multi-select-display';
import { MultiSelectValidation } from './multi-select-validation';
import { MultiSelectData } from './multi-select-data';
import { ComponentTypes } from '../../../constants/component-types';
import { FormConditional } from '../../abstract/form-conditional';

/**
 * Multi Select component
 */
@Component({
  selector: 'forge-multi-select',
  templateUrl: './multi-select-component.html',
  styleUrls: ['./multi-select-component.scss']
})
export class MultiSelectComponent extends FormComponent {
  /**
   * Multi select component
   */
  public id: string;

  /**
   * The multi select component type
   */
  public type: string = ComponentTypes.CheckboxGroup;

  /**
   * Form display attributes
   */
  public display: MultiSelectDisplay = new MultiSelectDisplay();

  /**
   * Form validation attributes
   */
  public validation: MultiSelectValidation = new MultiSelectValidation();

  /**
   * Form data attributes
   */
  public data: MultiSelectData = new MultiSelectData();

  /**
   * Form API attributes
   */
  public api: FormApi = new FormApi();

  /**
   * Conditional attributes
   */
  public conditional: FormConditional = new FormConditional();

  /**
   * The value of the component
   */
  public value: number = 0;

  /**
   * Gets the value of the component
   */
  public getValue(): number {
    return this.value;
  }

  /**
   * Calculates the value based on what was selected
   * @param event The check event
   * @param value The selected value
   */
  public calculateValue(event: any, value: number) {
    if (event.target.checked) {
      this.value = this.value + value;
    } else {
      this.value = this.value - value;
    }
  }

}

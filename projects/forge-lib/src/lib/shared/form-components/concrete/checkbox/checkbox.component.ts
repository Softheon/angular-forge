import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { CheckboxData } from './checkbox-data';
import { CheckboxDisplay } from './checkbox-display';
import { CheckboxValidation } from './checkbox-validation';
import { FormApi } from '../../abstract/form-api';
import { ComponentTypes } from '../../../constants/component-types';
import { FormConditional } from '../../abstract/form-conditional';

@Component({
  selector: 'forge-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends FormComponent implements OnInit {
  /**
   * ID of the component
   */
  public id: string;

  /**
   * Checkbox type
   */
  public type: string = ComponentTypes.Checkbox;

  /**
   * Checkbox display attributes
   */
  public display: CheckboxDisplay = new CheckboxDisplay();

  /**
   * Checkbox validation attributes
   */
  public validation: CheckboxValidation = new CheckboxValidation();

  /**
   * Checkbox data attributes
   */
  public data: CheckboxData = new CheckboxData;

  /**
   * Api data attributes
   */
  public api: FormApi = new FormApi();

  /**
   * Checkbox value
   */
  public value: boolean;

  /**
   * Conditional attributes
   */
  public conditional: FormConditional = new FormConditional();

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.value = this.data.defaultValue;

    if (!this.display.label) {
      this.display.label = 'Checkbox';
    }
  }

  /**
   * Gets the value of the checkbox
   */
  public getValue(): boolean {
    return this.value;
  }
}

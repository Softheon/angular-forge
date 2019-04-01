import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { CheckboxData } from './checkbox-data';
import { CheckboxDisplay } from './checkbox-display';
import { CheckboxValidation } from './checkbox-validation';

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
  public type: string = 'Checkbox';

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
   * Checkbox value
   */
  public value: boolean;

  public ngOnInit(): void {
    this.value = this.data.defaultValue;
  }

  /**
   * Gets the value of the checkbox
   */
  public getValue(): boolean {
    return this.value;
  }
}

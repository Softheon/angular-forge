import { Component, OnInit } from '@angular/core';

import { TextFieldFormComponent } from '../text-field-form-component/text-field.component';
import { NumberData } from './number-data';

@Component({
  selector: 'forge-builder-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends TextFieldFormComponent implements OnInit {
  /**
   * Data attributes
   */
  public data: NumberData = new NumberData();

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
  }
}

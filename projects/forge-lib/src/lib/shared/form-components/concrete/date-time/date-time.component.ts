import { Component, OnInit } from '@angular/core';
import { ComponentTypes } from '../../../constants/component-types';
import { DateTimeDisplay } from './date-time-display';
import { FormComponent } from '../../abstract/form-component';
import { FormApi } from '../../abstract/form-api';
import { DateTimeValidation } from './date-time-validation';
import { DateTimeData } from './date-time-data';

/**
 * Datetime component
 */
@Component({
  selector: 'forge-renderer-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent extends FormComponent implements OnInit {
  /**
   * The ID of the component
   */
  public id: string;

  /**
   * Component type
   */
  public type: string = ComponentTypes.DateTime;

  /**
   * Display attributes
   */
  public display: DateTimeDisplay = new DateTimeDisplay();

  /**
   * Data attributes
   */
  public data: DateTimeData = new DateTimeData();

  /**
   * Validation attributes
   */
  public validation: DateTimeValidation = new DateTimeValidation();

  /**
   * api attributes
   */
  public api: FormApi = new FormApi();

  /**
   * Value model
   */
  public value: string;


  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    if (!this.display.label) {
      this.display.label = 'Date Time';
    }
  }

  /**
   * Gets the value of the component
   */
  public getValue(): string {
    return this.value;
  }
}

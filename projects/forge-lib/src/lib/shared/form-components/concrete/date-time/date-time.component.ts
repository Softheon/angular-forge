import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentTypes } from '../../../constants/component-types';
import { DateTimeDisplay } from './date-time-display';
import { FormComponent } from '../../abstract/form-component';
import { FormApi } from '../../abstract/form-api';
import { DateTimeValidation } from './date-time-validation';
import { DateTimeData } from './date-time-data';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { FormConditional } from '../../abstract/form-conditional';

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
   * Conditional attributes
   */
  public conditional: FormConditional = new FormConditional();

  /**
   * Value model
   */
  public value: Date;

  /**
   * Date model for angular-mydatepicker
   */
  public myDpModel: IMyDateModel = {
    isRange: false,
    singleDate:
    {
      jsDate: new Date()
    }
  };

  /**
   * Date options for angular-mydatepicker
   */
  public myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm/dd/yyyy'
  };

  /**
   * Whether date model is valid
   */
  public myDpModelValid: boolean;

  /**
   * Date Input element reference
   */
  @ViewChild('dateInput') dateInput: ElementRef;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    if (!this.display.label) {
      this.display.label = 'Date Time';
    }

    // Initializes angular-mydatepicker objects
    if (this.display.dateFormat) {
      this.updateDateFormat(this.display.dateFormat);
    }
  }

  /**
   * Gets the value of the component
   */
  public getValue(): Date {
    return this.value;
  }

  /**
   * Updates value model on date model updates
   */
  public onInputFieldChanged(event: any): void {
    if (event.valid) {
      this.value = this.myDpModel.singleDate.jsDate;
      this.myDpModelValid = true;
      let event = new Event('change', {
        'bubbles': true,
      });
      this.dateInput.nativeElement.dispatchEvent(event);
    } else {
      this.myDpModelValid = false;
    }
  }

  /**
   * Updates date options on date format updates
   */
  public updateDateFormat(updatedFormat: string): void {
    let copy = this.getCopyOfOptions();
    copy.dateFormat = updatedFormat;
    this.myDpOptions = copy;
  }

  /**
   * Returns copy of myDpOptions
   */
  public getCopyOfOptions(): IAngularMyDpOptions {
    return JSON.parse(JSON.stringify(this.myDpOptions));
  }
}

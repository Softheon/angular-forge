import { Component, OnInit } from '@angular/core';

import { TextAreaDisplay } from './text-area-display';
import { TextAreaValidation } from './text-area-validation';
import { FormComponent } from '../../abstract/form-component';
import { FormData } from '../../abstract/form-data';
import { TextAreaData } from './text-area-data';

/**
 * Text area component
 */
@Component({
  selector: 'forge-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})

export class TextAreaComponent extends FormComponent implements OnInit {
  /**
   * The text area identifier
   */
  public id: string;

  /**
   * The text area type
   */
  public type: string = 'Text Area';

  /**
   * Data attributes
   */
  public data: TextAreaData = new TextAreaData();

  /**
   * Text area display attributes
   */
  public display: TextAreaDisplay = new TextAreaDisplay();

  /**
   * Text area validation attributes
   */
  public validation: TextAreaValidation = new TextAreaValidation();

  /**
   * The value of the text area
   */
  public value: string;

  /**
   * Gets the value
   */
  getValue() {
    return this.value;
  }

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.value = this.data.defaultValue;
  }
}

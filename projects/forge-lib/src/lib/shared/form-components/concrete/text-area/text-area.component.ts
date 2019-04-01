import { Component, OnInit } from '@angular/core';

import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { TextAreaDisplay } from './text-area-display';
import { TextAreaValidation } from './text-area-validation';

/**
 * Text area component
 */
@Component({
  selector: 'forge-builder-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent extends TextFieldComponent implements OnInit {

  /**
 * Component type
 */
  public type: string = 'Text Area';

  /**
   * Text area display attributes
   */
  public display: TextAreaDisplay = new TextAreaDisplay();

  /**
   * Text area validation attributes
   */
  public validation: TextAreaValidation = new TextAreaValidation();
}

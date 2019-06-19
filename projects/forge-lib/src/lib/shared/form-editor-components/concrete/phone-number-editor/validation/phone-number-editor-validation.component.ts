import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';

/**
 * Phone number form editor validation
 */
@Component({
  selector: 'forge-renderer-phone-number-editor-validation',
  templateUrl: './phone-number-editor-validation.component.html',
  styleUrls: ['./phone-number-editor-validation.component.scss']
})
export class PhoneNumberEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  /**
   * Selected phone number component associated with editor
   */
  public component: PhoneNumberComponent;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
  }

}

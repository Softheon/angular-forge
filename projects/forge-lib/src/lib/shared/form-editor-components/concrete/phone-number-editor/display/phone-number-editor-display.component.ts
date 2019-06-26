import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';
import { validatePhoneMask } from '../../../../validators/phoneMaskValidator';

/**
 * Phone number form editor display
 */
@Component({
  selector: 'forge-renderer-phone-number-editor-display',
  templateUrl: './phone-number-editor-display.component.html',
  styleUrls: ['./phone-number-editor-display.component.scss']
})
export class PhoneNumberEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  /**
   * Selected phone number component associated with editor
   */
  public component: PhoneNumberComponent;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
  }

  /**
   * Resets phone number value when format is modified and updates validation
   */
  public resetValue(): void {
    this.component.value = "";
    this.component.validation.minimumLength = null;
    this.component.validation.maximumLength = null;

    if(this.component.display.inputMask && validatePhoneMask(this.component.display.inputMask)) {
      let numberOfNumericValues = this.component.display.inputMask.split("x").length - 1;
      this.component.validation.minimumLength = numberOfNumericValues;
      this.component.validation.maximumLength = numberOfNumericValues;
    }
  }
}
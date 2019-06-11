import { Component, OnInit } from '@angular/core';
import { TextFieldComponent } from '../text-field/text-field.component';
import { ComponentTypes } from '../../../constants/component-types';

/**
 * Phone number component
 */
@Component({
  selector: 'forge-renderer-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent extends TextFieldComponent implements OnInit {
  /**
   * Component type
   */
  public type = ComponentTypes.PhoneNumber;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    if (!this.display.label) {
      this.display.label = 'Phone Number';
      this.display.inputMask = '(000) 000-0000';
    }

    this.value = this.data.defaultValue;
  }
}

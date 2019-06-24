import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';

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
   * Resets phone number value when format is modified
   */
  public resetValue(): void {
    this.component.value = "";
  }
}
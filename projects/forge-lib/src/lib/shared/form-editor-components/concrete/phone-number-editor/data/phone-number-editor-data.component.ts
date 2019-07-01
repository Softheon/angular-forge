import { Component, OnInit } from '@angular/core';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

/**
 * Phone number form editor data
 */
@Component({
  selector: 'forge-renderer-phone-number-editor-data',
  templateUrl: './phone-number-editor-data.component.html',
  styleUrls: ['./phone-number-editor-data.component.scss']
})
export class PhoneNumberEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

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

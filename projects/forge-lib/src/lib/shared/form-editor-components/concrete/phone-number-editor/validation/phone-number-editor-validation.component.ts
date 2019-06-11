import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';

@Component({
  selector: 'forge-renderer-phone-number-editor-validation',
  templateUrl: './phone-number-editor-validation.component.html',
  styleUrls: ['./phone-number-editor-validation.component.scss']
})
export class PhoneNumberEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: PhoneNumberComponent;

  ngOnInit() {
  }

}

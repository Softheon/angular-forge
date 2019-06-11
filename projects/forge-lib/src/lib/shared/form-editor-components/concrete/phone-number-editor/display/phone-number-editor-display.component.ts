import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';

@Component({
  selector: 'forge-renderer-phone-number-editor-display',
  templateUrl: './phone-number-editor-display.component.html',
  styleUrls: ['./phone-number-editor-display.component.scss']
})
export class PhoneNumberEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  public component: PhoneNumberComponent;

  ngOnInit() {
  }

}
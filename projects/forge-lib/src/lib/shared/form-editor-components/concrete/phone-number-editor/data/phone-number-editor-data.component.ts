import { Component, OnInit } from '@angular/core';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-phone-number-editor-data',
  templateUrl: './phone-number-editor-data.component.html',
  styleUrls: ['./phone-number-editor-data.component.scss']
})
export class PhoneNumberEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: PhoneNumberComponent;

  ngOnInit() {
  }

}

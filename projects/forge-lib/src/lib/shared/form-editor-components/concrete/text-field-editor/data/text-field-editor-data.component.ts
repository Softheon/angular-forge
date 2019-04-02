import { Component, OnInit } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { TextFieldComponent } from '../../../../form-components/concrete/text-field/text-field.component';

@Component({
  selector: 'forge-renderer-text-field-editor-data',
  templateUrl: './text-field-editor-data.component.html',
  styleUrls: ['./text-field-editor-data.component.css']
})
export class TextFieldEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: TextFieldComponent;

  ngOnInit() {
  }

}

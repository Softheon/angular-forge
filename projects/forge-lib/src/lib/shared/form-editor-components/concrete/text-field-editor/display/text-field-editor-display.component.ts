import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { TextFieldComponent } from '../../../../form-components/concrete/text-field/text-field.component';


@Component({
  selector: 'forge-renderer-text-field-editor-display',
  templateUrl: './text-field-editor-display.component.html',
  styleUrls: ['./text-field-editor-display.component.css']
})
export class TextFieldEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  public component: TextFieldComponent;

  ngOnInit() {
  }

}

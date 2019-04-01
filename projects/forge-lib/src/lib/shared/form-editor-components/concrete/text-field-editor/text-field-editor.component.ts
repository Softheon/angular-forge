import { Component, OnInit } from '@angular/core';
import { FormEditorComponent } from '../../abstract/form-editor/form-editor-component';
import { TextFieldComponent } from '../../../form-components/concrete/text-field/text-field.component';


@Component({
  selector: 'forge-renderer-text-field-editor',
  templateUrl: './text-field-editor.component.html',
  styleUrls: ['./text-field-editor.component.css']
})
export class TextFieldEditorComponent extends FormEditorComponent implements OnInit {

  public component: TextFieldComponent;

  ngOnInit() {
  }

}

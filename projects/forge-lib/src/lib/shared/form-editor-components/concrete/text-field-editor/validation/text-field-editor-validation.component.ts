import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { TextFieldComponent } from 'forge-lib/lib/shared/form-components/concrete/text-field/text-field.component';


@Component({
  selector: 'forge-renderer-text-field-editor-validation',
  templateUrl: './text-field-editor-validation.component.html',
  styleUrls: ['./text-field-editor-validation.component.css']
})
export class TextFieldEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: TextFieldComponent;

  ngOnInit() {
  }

}

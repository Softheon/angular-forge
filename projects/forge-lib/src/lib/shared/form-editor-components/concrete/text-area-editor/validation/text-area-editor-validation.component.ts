import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { TextAreaComponent } from 'forge-lib/lib/shared/form-components/concrete/text-area/text-area.component';

@Component({
  selector: 'forge-renderer-text-area-editor-validation',
  templateUrl: './text-area-editor-validation.component.html',
  styleUrls: ['./text-area-editor-validation.component.css']
})
export class TextAreaEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: TextAreaComponent;

  ngOnInit() {
  }

}

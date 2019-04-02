import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { TextAreaComponent } from '../../../../form-components/concrete/text-area/text-area.component';

@Component({
  selector: 'forge-renderer-text-area-editor-display',
  templateUrl: './text-area-editor-display.component.html',
  styleUrls: ['./text-area-editor-display.component.css']
})
export class TextAreaEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  public component: TextAreaComponent;

  ngOnInit() {
  }

}

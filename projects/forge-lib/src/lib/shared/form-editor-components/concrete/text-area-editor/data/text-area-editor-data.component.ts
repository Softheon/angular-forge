import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { TextAreaComponent } from '../../../../form-components/concrete/text-area/text-area.component';

@Component({
  selector: 'forge-renderer-text-area-editor-data',
  templateUrl: './text-area-editor-data.component.html',
  styleUrls: ['./text-area-editor-data.component.css']
})
export class TextAreaEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: TextAreaComponent;

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormEditorComponent } from '../../abstract/form-editor/form-editor-component';

@Component({
  selector: 'forge-renderer-text-area-editor',
  templateUrl: './text-area-editor.component.html',
  styleUrls: ['./text-area-editor.component.css']
})
export class TextAreaEditorComponent extends FormEditorComponent implements OnInit {

  ngOnInit() {
  }

}

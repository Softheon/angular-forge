import { Component, OnInit } from '@angular/core';
import { FormEditorComponent } from '../../abstract/form-editor/form-editor-component';

@Component({
  selector: 'forge-renderer-checkbox-editor',
  templateUrl: './checkbox-editor.component.html',
  styleUrls: ['./checkbox-editor.component.css']
})
export class CheckboxEditorComponent extends FormEditorComponent implements OnInit {

  ngOnInit() {
  }

}

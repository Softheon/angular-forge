import { Component, OnInit } from '@angular/core';
import { FormEditorComponent } from '../../abstract/form-editor/form-editor-component';

@Component({
  selector: 'forge-renderer-number-editor',
  templateUrl: './number-editor.component.html',
  styleUrls: ['./number-editor.component.css']
})
export class NumberEditorComponent extends FormEditorComponent implements OnInit {

  ngOnInit() {
  }

}

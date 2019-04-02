import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-number-editor-display',
  templateUrl: './number-editor-display.component.html',
  styleUrls: ['./number-editor-display.component.css']
})
export class NumberEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  ngOnInit() {
  }

}

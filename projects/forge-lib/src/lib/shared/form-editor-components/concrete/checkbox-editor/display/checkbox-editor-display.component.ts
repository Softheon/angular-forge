import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-checkbox-editor-display',
  templateUrl: './checkbox-editor-display.component.html',
  styleUrls: ['./checkbox-editor-display.component.css']
})
export class CheckboxEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  ngOnInit() {
  }

}

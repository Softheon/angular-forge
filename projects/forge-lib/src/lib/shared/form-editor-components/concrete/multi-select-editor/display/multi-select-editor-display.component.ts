import { Component, OnInit } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-multi-select-editor-display',
  templateUrl: './multi-select-editor-display.component.html',
  styleUrls: ['./multi-select-editor-display.component.scss']
})
export class MultiSelectEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  ngOnInit() {
  }

}

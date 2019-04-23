import { Component, OnInit } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-multi-select-editor-data',
  templateUrl: './multi-select-editor-data.component.html',
  styleUrls: ['./multi-select-editor-data.component.scss']
})
export class MultiSelectEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  ngOnInit() {
  }

}

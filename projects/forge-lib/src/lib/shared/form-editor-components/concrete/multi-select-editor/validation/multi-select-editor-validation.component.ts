import { Component, OnInit } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-multi-select-editor-validation',
  templateUrl: './multi-select-editor-validation.component.html',
  styleUrls: ['./multi-select-editor-validation.component.scss']
})
export class MultiSelectEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  ngOnInit() {
  }

}

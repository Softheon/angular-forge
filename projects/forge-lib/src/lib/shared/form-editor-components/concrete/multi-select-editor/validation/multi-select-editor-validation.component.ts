import { Component, OnInit } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { MultiSelectComponent } from 'forge-lib/lib/shared/form-components/concrete/multi-select/multi-select-component';

@Component({
  selector: 'forge-renderer-multi-select-editor-validation',
  templateUrl: './multi-select-editor-validation.component.html',
  styleUrls: ['./multi-select-editor-validation.component.scss']
})
export class MultiSelectEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  /** The component for the editor */
  public component: MultiSelectComponent;

  /**
   * Initializes the component
   */
  ngOnInit() {
  }

}

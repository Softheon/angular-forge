import { Component, OnInit } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { MultiSelectComponent } from '../../../../form-components/concrete/multi-select/multi-select-component';

@Component({
  selector: 'forge-renderer-multi-select-editor-data',
  templateUrl: './multi-select-editor-data.component.html',
  styleUrls: ['./multi-select-editor-data.component.scss']
})
export class MultiSelectEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  /** The component for the editor*/
  public component: MultiSelectComponent;

  /**
   * Initializes the component
   */
  ngOnInit() {
  }

}

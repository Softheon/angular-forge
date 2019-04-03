import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { CheckboxComponent } from '../../../../form-components/concrete/checkbox/checkbox.component';

@Component({
  selector: 'forge-renderer-checkbox-editor-validation',
  templateUrl: './checkbox-editor-validation.component.html',
  styleUrls: ['./checkbox-editor-validation.component.css']
})
export class CheckboxEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: CheckboxComponent;

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { NumberComponent } from '../../../../form-components/concrete/number/number.component';

@Component({
  selector: 'forge-renderer-number-editor-validation',
  templateUrl: './number-editor-validation.component.html',
  styleUrls: ['./number-editor-validation.component.css']
})
export class NumberEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: NumberComponent;

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { NumberComponent } from '../../../../form-components/concrete/number/number.component';

@Component({
  selector: 'forge-renderer-number-editor-data',
  templateUrl: './number-editor-data.component.html',
  styleUrls: ['./number-editor-data.component.css']
})
export class NumberEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: NumberComponent;

  ngOnInit() {
  }

}

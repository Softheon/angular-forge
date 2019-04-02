import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { CheckboxComponent } from '../../../../form-components/concrete/checkbox/checkbox.component';

@Component({
  selector: 'forge-renderer-checkbox-editor-data',
  templateUrl: './checkbox-editor-data.component.html',
  styleUrls: ['./checkbox-editor-data.component.css']
})
export class CheckboxEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: CheckboxComponent;

  ngOnInit() {
  }

}

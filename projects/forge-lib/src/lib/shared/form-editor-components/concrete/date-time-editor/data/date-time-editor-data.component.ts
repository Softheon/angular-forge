import { Component, OnInit } from '@angular/core';
import { DateTimeComponent } from '../../../../form-components/concrete/date-time/date-time.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-date-time-editor-data',
  templateUrl: './date-time-editor-data.component.html',
  styleUrls: ['./date-time-editor-data.component.scss']
})
export class DateTimeEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: DateTimeComponent;

  ngOnInit() {
  }

}
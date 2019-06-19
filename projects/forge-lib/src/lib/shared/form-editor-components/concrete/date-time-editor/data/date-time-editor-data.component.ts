import { Component, OnInit } from '@angular/core';
import { DateTimeComponent } from '../../../../form-components/concrete/date-time/date-time.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

/**
 * Date time form editor data
 */
@Component({
  selector: 'forge-renderer-date-time-editor-data',
  templateUrl: './date-time-editor-data.component.html',
  styleUrls: ['./date-time-editor-data.component.scss']
})
export class DateTimeEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  /**
   * Selected date time component associated with editor
   */
  public component: DateTimeComponent;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
  }

}
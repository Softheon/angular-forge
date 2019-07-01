import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { DateTimeComponent } from '../../../../form-components/concrete/date-time/date-time.component';

/**
 * Date time form editor validation
 */
@Component({
  selector: 'forge-renderer-date-time-editor-validation',
  templateUrl: './date-time-editor-validation.component.html',
  styleUrls: ['./date-time-editor-validation.component.scss']
})
export class DateTimeEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

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

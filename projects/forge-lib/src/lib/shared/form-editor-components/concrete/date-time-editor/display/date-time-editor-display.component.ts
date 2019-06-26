import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { DateTimeComponent } from '../../../../form-components/concrete/date-time/date-time.component';

/**
 * Date time form editor display
 */
@Component({
  selector: 'forge-renderer-date-time-editor-display',
  templateUrl: './date-time-editor-display.component.html',
  styleUrls: ['./date-time-editor-display.component.scss']
})
export class DateTimeEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  /**
   * Selected date time component associated with editor
   */
  public component: DateTimeComponent;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
  }

  /**
   * Emits updated date format to date time component
   */
  public emitDateFormat(): void {
    var val = this.component.display.dateFormat;
    var specialChars = /[@#$%^&*_+-=\[\]{};':"|,.<>\/? ]/g;
    const valid = ((val.includes('m') || val.includes('mm') || val.includes('mmm')) &&
      (val.includes('d') || val.includes('dd')) && (val.includes('yyyy')) && (val.match(specialChars).length > 1));

    if (valid) {
      this.component.updateDateFormat(val);
    }
  }
}


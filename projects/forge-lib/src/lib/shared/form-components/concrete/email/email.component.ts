import { Component, OnInit } from '@angular/core';

import { TextFieldComponent } from '../text-field/text-field.component';

/**
 * Email component
 */
@Component({
  selector: 'forge-renderer-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent extends TextFieldComponent implements OnInit {
  /**
   * Component type
   */
  public type = 'Email';

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    if (!this.display.label) {
      this.display.label = 'Email';
    }

    this.value = this.data.defaultValue;
  }

}

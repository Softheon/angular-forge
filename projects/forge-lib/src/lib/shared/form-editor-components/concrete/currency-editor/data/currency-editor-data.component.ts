import { Component, OnInit } from '@angular/core';

import { CurrencyComponent } from '../../../../form-components/concrete/currency/currency.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

/**
 * Currency form editor data
 */
@Component({
  selector: 'forge-renderer-currency-editor-data',
  templateUrl: './currency-editor-data.component.html',
  styleUrls: ['./currency-editor-data.component.scss']
})
export class CurrencyEditorDataComponent  extends FormEditorDisplayComponent implements OnInit {

  /**
   * Selected currency component associated with editor
   */
  public component: CurrencyComponent;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
  }

}

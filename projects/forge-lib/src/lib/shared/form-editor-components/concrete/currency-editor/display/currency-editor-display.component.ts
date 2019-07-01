import { Component, OnInit } from '@angular/core';
import { CurrencyComponent } from '../../../../form-components/concrete/currency/currency.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

/**
 * Currency form editor display
 */
@Component({
  selector: 'forge-renderer-currency-editor-display',
  templateUrl: './currency-editor-display.component.html',
  styleUrls: ['./currency-editor-display.component.scss']
})
export class CurrencyEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

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

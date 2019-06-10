import { Component, OnInit } from '@angular/core';

import { TextFieldComponent } from '../text-field/text-field.component';
import { ComponentTypes } from '../../../constants/component-types';
import { CurrencyData } from './currency-data';

/**
 * Currency component
 */
@Component({
  selector: 'forge-renderer-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent extends TextFieldComponent implements OnInit {
  /**
   * Component type
   */
  public type = ComponentTypes.Currency;

  /**
   * Data attributes
   */
  public data: CurrencyData = new CurrencyData();

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    if (!this.display.label) {
      this.display.label = 'Currency';
      this.display.prefix = '$';
    }

    this.value = this.data.defaultValue;
  }

}

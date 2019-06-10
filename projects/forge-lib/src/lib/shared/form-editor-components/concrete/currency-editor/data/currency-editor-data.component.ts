import { Component, OnInit } from '@angular/core';

import { CurrencyComponent } from '../../../../form-components/concrete/currency/currency.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-currency-editor-data',
  templateUrl: './currency-editor-data.component.html',
  styleUrls: ['./currency-editor-data.component.scss']
})
export class CurrencyEditorDataComponent  extends FormEditorDisplayComponent implements OnInit {

  public component: CurrencyComponent;

  ngOnInit() {
  }

}

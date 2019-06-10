import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { CurrencyComponent } from '../../../../form-components/concrete/currency/currency.component';

@Component({
  selector: 'forge-renderer-currency-editor-validation',
  templateUrl: './currency-editor-validation.component.html',
  styleUrls: ['./currency-editor-validation.component.scss']
})
export class CurrencyEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: CurrencyComponent;

  ngOnInit() {
  }

}

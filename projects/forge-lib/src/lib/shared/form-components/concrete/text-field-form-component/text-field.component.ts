import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { TextFieldDisplay } from './text-field-display';
import { TextFieldValidation } from './text-field-validation';

@Component({
  selector: 'forge-builder-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldFormComponent extends FormComponent implements OnInit {
  public id: string;

  public display: TextFieldDisplay = new TextFieldDisplay();

  public type: string = 'Text Field';

  public validation: TextFieldValidation = new TextFieldValidation();

  public data: FormData = new FormData();

  public value: string;

  getValue(): string {
    return this.value;
  }

  public ngOnInit(): void {
  }
}

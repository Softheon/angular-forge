import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FieldEditorComponent } from './field-editor.component';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldEditorDisplayComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/display/text-field-editor-display.component';
import { TextFieldEditorDataComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/data/text-field-editor-data.component';
import { TextFieldEditorValidationComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/validation/text-field-editor-validation.component';
import { NumberComponent } from '../../../..//shared/form-components/concrete/number/number.component';
import { NumberEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/number-editor/display/number-editor-display.component';
import { NumberEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/number-editor/data/number-editor-data.component';
import { TextAreaComponent } from '../../../..//shared/form-components/concrete/text-area/text-area.component';
import { NumberEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/number-editor/validation/number-editor-validation.component';
import { TextAreaEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/text-area-editor/display/text-area-editor-display.component';
import { TextAreaEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/text-area-editor/data/text-area-editor-data.component';
import { TextAreaEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/text-area-editor/validation/text-area-editor-validation.component';
import { CheckboxComponent } from '../../../..//shared/form-components/concrete/checkbox/checkbox.component';
import { CheckboxEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/checkbox-editor/display/checkbox-editor-display.component';
import { CheckboxEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/checkbox-editor/data/checkbox-editor-data.component';
import { CheckboxEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/checkbox-editor/validation/checkbox-editor-validation.component';
import { RatingComponent } from '../../../..//shared/form-components/concrete/rating/rating.component';
import { RatingEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/rating-editor/display/rating-editor-display.component';
import { RatingEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/rating-editor/data/rating-editor-data.component';
import { RatingEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/rating-editor/validation/rating-editor-validation.component';
import { EmailComponent } from '../../../..//shared/form-components/concrete/email/email.component';
import { EmailEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/email-editor/display/email-editor-display.component';
import { EmailEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/email-editor/data/email-editor-data.component';
import { EmailEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/email-editor/validation/email-editor-validation.component';
import { NumberDirective } from '../../../../shared/directives/number.directive';
import { MinValidatorDirective } from '../../../../shared/validators/minValidator';
import { MaxValidatorDirective } from '../../../../shared/validators/maxValidator';
import { CurrencyComponent } from '../../../..//shared/form-components/concrete/currency/currency.component';
import { CurrencyEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/currency-editor/display/currency-editor-display.component';
import { CurrencyEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/currency-editor/data/currency-editor-data.component';
import { CurrencyEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/currency-editor/validation/currency-editor-validation.component';
import { DateTimeComponent } from '../../../..//shared/form-components/concrete/date-time/date-time.component';
import { DateTimeEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/date-time-editor/display/date-time-editor-display.component';
import { DateTimeEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/date-time-editor/data/date-time-editor-data.component';
import { DateTimeEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/date-time-editor/validation/date-time-editor-validation.component';
import { PhoneNumberComponent } from '../../../..//shared/form-components/concrete/phone-number/phone-number.component';
import { PhoneNumberEditorDisplayComponent } from '../../../..//shared/form-editor-components/concrete/phone-number-editor/display/phone-number-editor-display.component';
import { PhoneNumberEditorDataComponent } from '../../../..//shared/form-editor-components/concrete/phone-number-editor/data/phone-number-editor-data.component';
import { PhoneNumberEditorValidationComponent } from '../../../..//shared/form-editor-components/concrete/phone-number-editor/validation/phone-number-editor-validation.component';
import { PhoneNumberDirective } from '../../../../shared/directives/phone-number.directive';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

describe('FieldEditorComponent', () => {
  let component: FieldEditorComponent;
  let fixture: ComponentFixture<FieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldEditorComponent,
        TextFieldEditorDisplayComponent,
        TextFieldEditorDataComponent,
        TextFieldEditorValidationComponent,
        NumberComponent,
        NumberDirective,
        MinValidatorDirective,
        MaxValidatorDirective,
        NumberEditorDisplayComponent,
        NumberEditorDataComponent,
        NumberEditorValidationComponent,
        TextAreaComponent,
        TextAreaEditorDisplayComponent,
        TextAreaEditorDataComponent,
        TextAreaEditorValidationComponent,
        CheckboxComponent,
        CheckboxEditorDisplayComponent,
        CheckboxEditorDataComponent,
        CheckboxEditorValidationComponent,
        RatingComponent,
        RatingEditorDisplayComponent,
        RatingEditorDataComponent,
        RatingEditorValidationComponent,
        EmailComponent,
        EmailEditorDisplayComponent,
        EmailEditorDataComponent,
        EmailEditorValidationComponent,
        CurrencyComponent,
        CurrencyEditorDisplayComponent,
        CurrencyEditorDataComponent,
        CurrencyEditorValidationComponent,
        DateTimeComponent,
        DateTimeEditorDisplayComponent,
        DateTimeEditorDataComponent,
        DateTimeEditorValidationComponent,
        PhoneNumberComponent,
        PhoneNumberEditorDisplayComponent,
        PhoneNumberEditorDataComponent,
        PhoneNumberEditorValidationComponent,
        PhoneNumberDirective
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        AngularMyDatePickerModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { field: new TextFieldComponent() } },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          TextFieldEditorDisplayComponent,
          TextFieldEditorDataComponent,
          TextFieldEditorValidationComponent,
          NumberComponent,
          NumberEditorDisplayComponent,
          NumberEditorDataComponent,
          NumberEditorValidationComponent,
          TextAreaComponent,
          TextAreaEditorDisplayComponent,
          TextAreaEditorDataComponent,
          TextAreaEditorValidationComponent,
          CheckboxComponent,
          CheckboxEditorDisplayComponent,
          CheckboxEditorDataComponent,
          CheckboxEditorValidationComponent,
          RatingComponent,
          RatingEditorDisplayComponent,
          RatingEditorDataComponent,
          RatingEditorValidationComponent,
          EmailComponent,
          EmailEditorDisplayComponent,
          EmailEditorDataComponent,
          EmailEditorValidationComponent,
          CurrencyComponent,
          CurrencyEditorDisplayComponent,
          CurrencyEditorDataComponent,
          CurrencyEditorValidationComponent,
          DateTimeComponent,
          DateTimeEditorDisplayComponent,
          DateTimeEditorDataComponent,
          DateTimeEditorValidationComponent,
          PhoneNumberComponent,
          PhoneNumberEditorDisplayComponent,
          PhoneNumberEditorDataComponent,
          PhoneNumberEditorValidationComponent
        ]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldEditorComponent);
    component = fixture.componentInstance;
    component.field = new TextFieldComponent();
    component.formsService.formBuilderConfig = {
      oauthToken: '',
      forgeApiUrl: '',
      accountName: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    component.field = new TextFieldComponent();
    expect(component).toBeTruthy();
  });

  it('should create with number component', () => {
    component.field = new NumberComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should create with Text Area component', () => {
    component.field = new TextAreaComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create with Checkbox component', () => {
    component.field = new CheckboxComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create with Rating component', () => {
    component.field = new RatingComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create with email component', () => {
    component.field = new EmailComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create with Currency component', () => {
    component.field = new CurrencyComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create with Datetime component', () => {
    component.field = new DateTimeComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should create with PhoneNumber component', () => {
    component.field = new PhoneNumberComponent();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

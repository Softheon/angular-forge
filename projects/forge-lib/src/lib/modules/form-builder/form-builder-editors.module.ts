import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextFieldEditorDisplayComponent } from '../../shared/form-editor-components/concrete/text-field-editor/display/text-field-editor-display.component';
import { TextFieldEditorDataComponent } from '../../shared/form-editor-components/concrete/text-field-editor/data/text-field-editor-data.component';
import { TextFieldEditorValidationComponent } from '../../shared/form-editor-components/concrete/text-field-editor/validation/text-field-editor-validation.component';
import { NumberEditorDisplayComponent } from '../../shared/form-editor-components/concrete/number-editor/display/number-editor-display.component';
import { NumberEditorDataComponent } from '../../shared/form-editor-components/concrete/number-editor/data/number-editor-data.component';
import { NumberEditorValidationComponent } from '../../shared/form-editor-components/concrete/number-editor/validation/number-editor-validation.component';
import { TextAreaEditorDisplayComponent } from '../../shared/form-editor-components/concrete/text-area-editor/display/text-area-editor-display.component';
import { TextAreaEditorDataComponent } from '../../shared/form-editor-components/concrete/text-area-editor/data/text-area-editor-data.component';
import { TextAreaEditorValidationComponent } from '../../shared/form-editor-components/concrete/text-area-editor/validation/text-area-editor-validation.component';
import { CheckboxEditorDisplayComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/display/checkbox-editor-display.component';
import { CheckboxEditorDataComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/data/checkbox-editor-data.component';
import { CheckboxEditorValidationComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/validation/checkbox-editor-validation.component';
import { RatingEditorDisplayComponent } from '../../shared/form-editor-components/concrete/rating-editor/display/rating-editor-display.component';
import { RatingEditorDataComponent } from '../../shared/form-editor-components/concrete/rating-editor/data/rating-editor-data.component';
import { RatingEditorValidationComponent } from '../../shared/form-editor-components/concrete/rating-editor/validation/rating-editor-validation.component';
import { EmailEditorDisplayComponent } from '../../shared/form-editor-components/concrete/email-editor/display/email-editor-display.component';
import { EmailEditorDataComponent } from '../../shared/form-editor-components/concrete/email-editor/data/email-editor-data.component';
import { EmailEditorValidationComponent } from '../../shared/form-editor-components/concrete/email-editor/validation/email-editor-validation.component';
import { AttachmentEditorDataComponent } from '../../shared/form-editor-components/concrete/attachment-editor/data/attachment-editor-data.component';
import { AttachmentEditorDisplayComponent } from '../../shared/form-editor-components/concrete/attachment-editor/display/attachment-editor-display.component';
import { AttachmentEditorValidationComponent } from '../../shared/form-editor-components/concrete/attachment-editor/validation/attachment-editor-validation.component';

import { MultiSelectEditorDataComponent } from '../../shared/form-editor-components/concrete/multi-select-editor/data/multi-select-editor-data.component';
import { MultiSelectEditorDisplayComponent } from '../../shared/form-editor-components/concrete/multi-select-editor/display/multi-select-editor-display.component';
import { MultiSelectEditorValidationComponent } from '../../shared/form-editor-components/concrete/multi-select-editor/validation/multi-select-editor-validation.component';
import { CurrencyEditorDataComponent } from '../../shared/form-editor-components/concrete/currency-editor/data/currency-editor-data.component';
import { CurrencyEditorDisplayComponent } from '../../shared/form-editor-components/concrete/currency-editor/display/currency-editor-display.component';
import { CurrencyEditorValidationComponent } from '../../shared/form-editor-components/concrete/currency-editor/validation/currency-editor-validation.component';
import { DateTimeEditorDataComponent } from '../../shared/form-editor-components/concrete/date-time-editor/data/date-time-editor-data.component';
import { DateTimeEditorDisplayComponent } from '../../shared/form-editor-components/concrete/date-time-editor/display/date-time-editor-display.component';
import { DateTimeEditorValidationComponent } from '../../shared/form-editor-components/concrete/date-time-editor/validation/date-time-editor-validation.component';
import { PhoneNumberEditorDataComponent } from '../../shared/form-editor-components/concrete/phone-number-editor/data/phone-number-editor-data.component';
import { PhoneNumberEditorDisplayComponent } from '../../shared/form-editor-components/concrete/phone-number-editor/display/phone-number-editor-display.component';
import { PhoneNumberEditorValidationComponent } from '../../shared/form-editor-components/concrete/phone-number-editor/validation/phone-number-editor-validation.component';
import { DateFormatValidatorDirective } from '../../shared/validators/dateValidator';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TextFieldEditorDisplayComponent,
        TextFieldEditorDataComponent,
        TextFieldEditorValidationComponent,
        NumberEditorDisplayComponent,
        NumberEditorDataComponent,
        NumberEditorValidationComponent,
        TextAreaEditorDisplayComponent,
        TextAreaEditorDataComponent,
        TextAreaEditorValidationComponent,
        CheckboxEditorDisplayComponent,
        CheckboxEditorDataComponent,
        CheckboxEditorValidationComponent,
        RatingEditorDisplayComponent,
        RatingEditorDataComponent,
        RatingEditorValidationComponent,
        EmailEditorDisplayComponent,
        EmailEditorDataComponent,
        EmailEditorValidationComponent,
        AttachmentEditorDataComponent,
        AttachmentEditorDisplayComponent,
        AttachmentEditorValidationComponent,
        MultiSelectEditorDataComponent,
        MultiSelectEditorDisplayComponent,
        MultiSelectEditorValidationComponent,
        CurrencyEditorDataComponent,
        CurrencyEditorDisplayComponent,
        CurrencyEditorValidationComponent,
        DateTimeEditorDataComponent,
        DateTimeEditorDisplayComponent,
        DateTimeEditorValidationComponent,
        PhoneNumberEditorDataComponent,
        PhoneNumberEditorDisplayComponent,
        PhoneNumberEditorValidationComponent,
        DateFormatValidatorDirective
    ],
    exports: [
        TextFieldEditorDisplayComponent,
        TextFieldEditorDataComponent,
        TextFieldEditorValidationComponent,
        NumberEditorDisplayComponent,
        NumberEditorDataComponent,
        NumberEditorValidationComponent,
        TextAreaEditorDisplayComponent,
        TextAreaEditorDataComponent,
        TextAreaEditorValidationComponent,
        CheckboxEditorDisplayComponent,
        CheckboxEditorDataComponent,
        CheckboxEditorValidationComponent,
        RatingEditorDisplayComponent,
        RatingEditorDataComponent,
        RatingEditorValidationComponent,
        EmailEditorDisplayComponent,
        EmailEditorDataComponent,
        EmailEditorValidationComponent,
        AttachmentEditorDataComponent,
        AttachmentEditorDisplayComponent,
        AttachmentEditorValidationComponent,
        MultiSelectEditorDataComponent,
        MultiSelectEditorDisplayComponent,
        MultiSelectEditorValidationComponent,
        CurrencyEditorDataComponent,
        CurrencyEditorDisplayComponent,
        CurrencyEditorValidationComponent,
        DateTimeEditorDataComponent,
        DateTimeEditorDisplayComponent,
        DateTimeEditorValidationComponent,
        PhoneNumberEditorDataComponent,
        PhoneNumberEditorDisplayComponent,
        PhoneNumberEditorValidationComponent,
        DateFormatValidatorDirective
    ],
    entryComponents: [
        TextFieldEditorDisplayComponent,
        TextFieldEditorDataComponent,
        TextFieldEditorValidationComponent,
        NumberEditorDisplayComponent,
        NumberEditorDataComponent,
        NumberEditorValidationComponent,
        TextAreaEditorDisplayComponent,
        TextAreaEditorDataComponent,
        TextAreaEditorValidationComponent,
        CheckboxEditorDisplayComponent,
        CheckboxEditorDataComponent,
        CheckboxEditorValidationComponent,
        RatingEditorDisplayComponent,
        RatingEditorDataComponent,
        RatingEditorValidationComponent,
        EmailEditorDisplayComponent,
        EmailEditorDataComponent,
        EmailEditorValidationComponent,
        AttachmentEditorDataComponent,
        AttachmentEditorDisplayComponent,
        AttachmentEditorValidationComponent,
        MultiSelectEditorDataComponent,
        MultiSelectEditorDisplayComponent,
        MultiSelectEditorValidationComponent,
        CurrencyEditorDataComponent,
        CurrencyEditorDisplayComponent,
        CurrencyEditorValidationComponent,
        DateTimeEditorDataComponent,
        DateTimeEditorDisplayComponent,
        DateTimeEditorValidationComponent,
        PhoneNumberEditorDataComponent,
        PhoneNumberEditorDisplayComponent,
        PhoneNumberEditorValidationComponent
    ]
})
export class FormBuilderEditorsModule { }

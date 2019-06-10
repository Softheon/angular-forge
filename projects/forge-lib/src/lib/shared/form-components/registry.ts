import { Type } from '@angular/core';

import { TextFieldComponent } from './concrete/text-field/text-field.component';
import { NumberComponent } from './concrete/number/number.component';
import { FormComponent } from './abstract/form-component';
import { TextAreaComponent } from './concrete/text-area/text-area.component';
import { CheckboxComponent } from './concrete/checkbox/checkbox.component';
import { RatingComponent } from './concrete/rating/rating.component';
import { EmailComponent } from './concrete/email/email.component';
import { AttachmentComponent } from './concrete/attachment/attachment.component';
import { MultiSelectComponent } from './concrete/multi-select/multi-select-component';
import { ComponentTypes } from '../constants/component-types';
import { CurrencyComponent } from './concrete/currency/currency.component';

export const getRegistryType = (name: string): Type<FormComponent> => {
    switch (name) {
        case ComponentTypes.TextField: {
            return TextFieldComponent;
        }
        case ComponentTypes.NumberField: {
            return NumberComponent;
        }
        case ComponentTypes.TextArea: {
            return TextAreaComponent;
        }
        case ComponentTypes.Checkbox: {
            return CheckboxComponent;
        }
        case ComponentTypes.Rating: {
            return RatingComponent;
        }
        case ComponentTypes.Email: {
            return EmailComponent;
        }
        case ComponentTypes.Attachment: {
            return AttachmentComponent;
        }
        case ComponentTypes.CheckboxGroup: {
            return MultiSelectComponent;
        }
        case ComponentTypes.Currency: {
            return CurrencyComponent;
        }
    }
};

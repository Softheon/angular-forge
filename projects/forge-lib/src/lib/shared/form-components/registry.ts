import { Type } from '@angular/core';

import { TextFieldComponent } from './concrete/text-field/text-field.component';
import { NumberComponent } from './concrete/number/number.component';
import { FormComponent } from './abstract/form-component';
import { TextAreaComponent } from './concrete/text-area/text-area.component';
import { CheckboxComponent } from './concrete/checkbox/checkbox.component';
import { RatingComponent } from './concrete/rating/rating.component';
import { EmailComponent } from './concrete/email/email.component';

export const getRegistryType = (name: string): Type<FormComponent> => {
    console.log(name);
    switch (name) {
        case TextFieldComponent.name: {
            return TextFieldComponent;
        }
        case NumberComponent.name: {
            return NumberComponent;
        }
        case TextAreaComponent.name: {
            return TextAreaComponent;
        }
        case CheckboxComponent.name: {
            return CheckboxComponent;
        }
        case RatingComponent.name: {
            return RatingComponent;
        }
        case EmailComponent.name: {
            return EmailComponent;
        }
        case "Text Field": {
            return TextFieldComponent;
        }
        case "Number": {
            return NumberComponent;
        }
        case "Text Area": {
            return TextAreaComponent;
        }
        case "Checkbox": {
            return CheckboxComponent;
        }
        case "Rating": {
            return RatingComponent;
        }
        case "Email": {
            return EmailComponent;
        }
    }
};

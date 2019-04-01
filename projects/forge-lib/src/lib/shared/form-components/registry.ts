import { Type } from '@angular/core';

import { TextFieldComponent } from './concrete/text-field/text-field.component';
import { NumberComponent } from './concrete/number/number.component';
import { FormComponent } from './abstract/form-component';
import { TextAreaComponent } from './concrete/text-area/text-area.component';
import { CheckboxComponent } from './concrete/checkbox/checkbox.component';

export const getRegistryType = (name: string): Type<FormComponent> => {
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
    }
};

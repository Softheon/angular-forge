import { Type } from '@angular/core';

import { TextFieldFormComponent } from './concrete/text-field/text-field.component';
import { NumberComponent } from './concrete/number/number.component';
import { FormComponent } from './abstract/form-component';
import { TextAreaComponent } from './concrete/text-area/text-area.component';

export const getRegistryType = (name: string): Type<FormComponent> => {
    switch (name) {
        case TextFieldFormComponent.name: {
            return TextFieldFormComponent;
        }
        case NumberComponent.name: {
            return NumberComponent;
        }
        case TextAreaComponent.name: {
            return TextAreaComponent;
        }
    }
};

import { Type } from '@angular/core';

import { FormEditorDisplayComponent } from './abstract/form-editor/display/form-editor-display-component';
import { TextFieldEditorDisplayComponent } from './concrete/text-field-editor/display/text-field-editor-display.component';
import { NumberEditorDisplayComponent } from './concrete/number-editor/display/number-editor-display.component';
import { TextAreaEditorDisplayComponent } from './concrete/text-area-editor/display/text-area-editor-display.component';
import { CheckboxEditorDisplayComponent } from './concrete/checkbox-editor/display/checkbox-editor-display.component';
import { RatingEditorDisplayComponent } from './concrete/rating-editor/display/rating-editor-display.component';
import { EmailEditorDisplayComponent } from './concrete/email-editor/display/email-editor-display.component';
import { AttachmentEditorDisplayComponent } from './concrete/attachment-editor/display/attachment-editor-display.component';
import { MultiSelectEditorDisplayComponent } from './concrete/multi-select-editor/display/multi-select-editor-display.component';

import { TextFieldEditorDataComponent } from './concrete/text-field-editor/data/text-field-editor-data.component';
import { NumberEditorDataComponent } from './concrete/number-editor/data/number-editor-data.component';
import { TextAreaEditorDataComponent } from './concrete/text-area-editor/data/text-area-editor-data.component';
import { CheckboxEditorDataComponent } from './concrete/checkbox-editor/data/checkbox-editor-data.component';
import { RatingEditorDataComponent } from './concrete/rating-editor/data/rating-editor-data.component';
import { EmailEditorDataComponent } from './concrete/email-editor/data/email-editor-data.component';
import { AttachmentEditorDataComponent } from './concrete/attachment-editor/data/attachment-editor-data.component';
import { MultiSelectEditorDataComponent } from './concrete/multi-select-editor/data/multi-select-editor-data.component';

import { TextFieldEditorValidationComponent } from './concrete/text-field-editor/validation/text-field-editor-validation.component';
import { NumberEditorValidationComponent } from './concrete/number-editor/validation/number-editor-validation.component';
import { TextAreaEditorValidationComponent } from './concrete/text-area-editor/validation/text-area-editor-validation.component';
import { CheckboxEditorValidationComponent } from './concrete/checkbox-editor/validation/checkbox-editor-validation.component';
import { RatingEditorValidationComponent } from './concrete/rating-editor/validation/rating-editor-validation.component';
import { EmailEditorValidationComponent } from './concrete/email-editor/validation/email-editor-validation.component';
import { AttachmentEditorValidationComponent } from './concrete/attachment-editor/validation/attachment-editor-validation.component';
import { MultiSelectEditorValidationComponent } from './concrete/multi-select-editor/validation/multi-select-editor-validation.component';
import { CurrencyEditorDisplayComponent } from './concrete/currency-editor/display/currency-editor-display.component';
import { CurrencyEditorDataComponent } from './concrete/currency-editor/data/currency-editor-data.component';
import { CurrencyEditorValidationComponent } from './concrete/currency-editor/validation/currency-editor-validation.component';

export const getRegistryType = (name: string): Type<FormEditorDisplayComponent> => {
    switch (name) {
        // DISPLAY
        case TextFieldEditorDisplayComponent.name: {
            return TextFieldEditorDisplayComponent;
        }
        case NumberEditorDisplayComponent.name: {
            return NumberEditorDisplayComponent;
        }
        case TextAreaEditorDisplayComponent.name: {
            return TextAreaEditorDisplayComponent;
        }
        case CheckboxEditorDisplayComponent.name: {
            return CheckboxEditorDisplayComponent;
        }
        case RatingEditorDisplayComponent.name: {
            return RatingEditorDisplayComponent;
        }
        case EmailEditorDisplayComponent.name: {
            return EmailEditorDisplayComponent;
        }
        case AttachmentEditorDisplayComponent.name: {
            return AttachmentEditorDisplayComponent;
        }
        case MultiSelectEditorDisplayComponent.name: {
            return MultiSelectEditorDisplayComponent;
        }
        case CurrencyEditorDisplayComponent.name: {
            return CurrencyEditorDisplayComponent;
        }


        // DATA
        case TextFieldEditorDataComponent.name: {
            return TextFieldEditorDataComponent;
        }
        case NumberEditorDataComponent.name: {
            return NumberEditorDataComponent;
        }
        case TextAreaEditorDataComponent.name: {
            return TextAreaEditorDataComponent;
        }
        case CheckboxEditorDataComponent.name: {
            return CheckboxEditorDataComponent;
        }
        case RatingEditorDataComponent.name: {
            return RatingEditorDataComponent;
        }
        case EmailEditorDataComponent.name: {
            return EmailEditorDataComponent;
        }
        case AttachmentEditorDataComponent.name: {
            return AttachmentEditorDataComponent;
        }
        case MultiSelectEditorDataComponent.name: {
            return MultiSelectEditorDataComponent;
        }
        case CurrencyEditorDataComponent.name: {
            return CurrencyEditorDataComponent;
        }

        // Validation
        case TextFieldEditorValidationComponent.name: {
            return TextFieldEditorValidationComponent;
        }
        case NumberEditorValidationComponent.name: {
            return NumberEditorValidationComponent;
        }
        case TextAreaEditorValidationComponent.name: {
            return TextAreaEditorValidationComponent;
        }
        case CheckboxEditorValidationComponent.name: {
            return CheckboxEditorValidationComponent;
        }
        case RatingEditorValidationComponent.name: {
            return RatingEditorValidationComponent;
        }
        case EmailEditorValidationComponent.name: {
            return EmailEditorValidationComponent;
        }
        case AttachmentEditorValidationComponent.name: {
            return AttachmentEditorValidationComponent;
        }
        case MultiSelectEditorValidationComponent.name: {
            return MultiSelectEditorValidationComponent;
        }
        case CurrencyEditorValidationComponent.name: {
            return CurrencyEditorValidationComponent;
        }
    }
};

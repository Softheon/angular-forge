import { Type } from '@angular/core';
import { FormEditorDisplayComponent } from './abstract/form-editor/display/form-editor-display-component';
import { TextFieldEditorDisplayComponent } from './concrete/text-field-editor/display/text-field-editor-display.component';
import { NumberEditorDisplayComponent } from './concrete/number-editor/display/number-editor-display.component';
import { TextAreaEditorDisplayComponent } from './concrete/text-area-editor/display/text-area-editor-display.component';
import { CheckboxEditorDisplayComponent } from './concrete/checkbox-editor/display/checkbox-editor-display.component';

export const getRegistryType = (name: string): Type<FormEditorDisplayComponent> => {
    switch (name) {
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
    }
};

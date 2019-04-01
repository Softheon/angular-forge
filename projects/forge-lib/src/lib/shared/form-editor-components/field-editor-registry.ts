import { Type } from '@angular/core';
import { FormEditorComponent } from './abstract/form-editor/form-editor-component';
import { TextFieldEditorComponent } from './concrete/text-field-editor/text-field-editor.component';
import { NumberEditorComponent } from './concrete/number-editor/number-editor.component';
import { TextAreaEditorComponent } from './concrete/text-area-editor/text-area-editor.component';
import { CheckboxEditorComponent } from './concrete/checkbox-editor/checkbox-editor.component';

export const getRegistryType = (name: string): Type<FormEditorComponent> => {
    switch (name) {
        case TextFieldEditorComponent.name: {
            return TextFieldEditorComponent;
        }
         case NumberEditorComponent.name: {
             return NumberEditorComponent;
         }
         case TextAreaEditorComponent.name: {
             return TextAreaEditorComponent;
         }
         case CheckboxEditorComponent.name: {
             return CheckboxEditorComponent;
         }
    }
};

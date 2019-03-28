import { FormComponent } from './abstract/form-component';
import { TextFieldFormComponent } from './concrete/text-field-form-component/text-field.component';
import { NumberComponent } from './concrete/number/number.component';

export const registry: Map<string, new () => FormComponent>
    = new Map([
        [TextFieldFormComponent.name, TextFieldFormComponent],
        [NumberComponent.name, NumberComponent]
    ]);

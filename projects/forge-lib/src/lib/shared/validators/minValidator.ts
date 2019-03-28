import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function minValidator(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value < min) {
            return { 'minValue': { value: control.value } };
        }
        return null;
    };
}

@Directive({
    selector: '[minValue]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true }]
})
export class MinValidatorDirective implements Validator {
    @Input() minValue: number;

    public validate(control: AbstractControl): { [key: string]: any } | null {
        return this.minValue ? minValidator(this.minValue)(control) : null;
    }
}

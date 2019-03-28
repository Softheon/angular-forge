import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function maxValidator(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value > max) {
            return { 'maxValue': { value: control.value } };
        }
        return null;
    };
}

@Directive({
    selector: '[maxValue]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true }]
})
export class MaxValidatorDirective implements Validator {
    @Input() maxValue: number;

    public validate(control: AbstractControl): { [key: string]: any } | null {
        return this.maxValue ? maxValidator(this.maxValue)(control) : null;
    }
}

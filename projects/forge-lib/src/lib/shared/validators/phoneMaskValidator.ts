import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** Phone Mask must be contain only Xs and special characters. */
export function phoneMaskValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if(!control.value || control.value.length == 0) return null;
    const val = control.value as string;
    const specialChars = /[^A-Za-z0-9]/g;
    var specialCharsCount = 0;
    if(val.match(specialChars)) {
        specialCharsCount = val.match(specialChars).length;
    }
    var numericCharsCount = 0;
    if(val.split('x')) {
        numericCharsCount = val.split('x').length - 1;
    }
    const valid = ((specialCharsCount + numericCharsCount) == (val.length));
    return !valid ? { 'invalidPhoneMask': { value: control.value } } : null;
  };
}

/** Phone Mask Directive to ensure valid phone mask in input. */
@Directive({
  selector: '[phoneMask]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneMaskValidatorDirective, multi: true }]
})
export class PhoneMaskValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return phoneMaskValidator()(control);
  }
}


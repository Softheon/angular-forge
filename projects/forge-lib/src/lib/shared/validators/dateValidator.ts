import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** Date Format must include one of each d/dd m/mm/mmm yyyy and at least 2 special characters. */
export function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    var val = control.value as string;
    var specialChars = /[@#$%^&*_+-=\[\]{};':"|,.<>\/? ]/g;
    const forbidden = !((val.includes('m') || val.includes('mm') || val.includes('mmm')) &&
      (val.includes('d') || val.includes('dd')) && (val.includes('yyyy')) && (val.match(specialChars).length > 1));
    return forbidden ? { 'invalidDateFormat': { value: control.value } } : null;
  };
}

@Directive({
  selector: '[dateFormat]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateFormatValidatorDirective, multi: true }]
})
export class DateFormatValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return dateFormatValidator()(control);
  }
}


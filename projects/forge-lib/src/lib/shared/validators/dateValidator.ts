import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** Date Format must include one of each d/dd m/mm/mmm yyyy and at least 2 special characters. */
export function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value || control.value.length == 0) return null;
    const val = control.value as string;
    const format = /^([m]{1,3}|[d]{1,2}|[y]{4}){1}[^A-Za-z0-9]{1,2}([m]{1,3}|[d]{1,2}|[y]{4}){1}[^A-Za-z0-9]{1,2}([m]{1,3}|[d]{1,2}|[y]{4}){1}$/g;
    const required = ((val.includes('m') || val.includes('mm') || val.includes('mmm')) &&
      (val.includes('d') || val.includes('dd')) && (val.includes('yyyy')));
    var valid = false;
    if (val.match(format)) {
      valid = (val.match(format).length == 1) && (required);
    }
    return !valid ? { 'invalidDateFormat': { value: control.value } } : null;
  };
}

/** Date Format Directive to ensure valid date format in input. */
@Directive({
  selector: '[dateFormat]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateFormatValidatorDirective, multi: true }]
})
export class DateFormatValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return dateFormatValidator()(control);
  }
}


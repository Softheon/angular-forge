import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[forgeNumber]'
})
export class NumberDirective {
    constructor(private el: ElementRef) { }

    @Input() requireDecimal: boolean = true;

    @Input() decimalPlaces: number;

    @HostListener('keyup', ['$event']) onkeyUp(_) {
        const value: string = this.el.nativeElement.value;

        // Make sure if there is a -, that it's at the start position
        if (value.includes('-') && value[0] !== '-') {
            this.el.nativeElement.value = value.replace('-', '');
        }

        // If decimal place is required, auto add it if it's missing
        if (this.requireDecimal) {
            if (!value.includes('.')) {
                this.el.nativeElement.value = value + '.0';
            }
        }
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e = <KeyboardEvent>event;
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }

        if (!this.decimalPlaces || this.decimalPlaces === 0) {
            // Prevent decimal if not expected
            if (e.keyCode === 190 || e.keyCode === 110) {
                e.preventDefault();
                return;
            }
        }

        // allow numbers
        if ((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57)) {
            return;
        }

        // allow decimal
        if (e.keyCode === 190 || e.keyCode === 110) {
            // make sure it wasn't already entered
            if ((this.el.nativeElement.value as string).includes('.')) {
                e.preventDefault();
                return;
            } else {
                return;
            }
        }

        // allow -
        if (e.keyCode === 189 || e.keyCode === 109) {
            // make sure it wasn't already entered
            if ((this.el.nativeElement.value as string).includes('-')) {
                e.preventDefault();
                return;
            } else {
                return;
            }
        }

        // Don't allow anything else
        e.preventDefault();
    }
}

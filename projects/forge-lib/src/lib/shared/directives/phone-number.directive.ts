import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[forgePhoneNumber]'
})
export class PhoneNumberDirective {
    constructor(private el: ElementRef) { }

    @Input() inputMask: string;

    @HostListener('keyup', ['$event']) onkeyUp(_) {
        const value: string = this.el.nativeElement.value;

        // No input mask
        if(!this.inputMask || this.inputMask.split("x").length - 1 == 0) {
            return;
        }

        // Format phone number if not already formatted
        if ((value.replace(/[^0-9]/g, "").length == this.inputMask.split("x").length - 1)
            && (value.replace(/[0-9]/g, "").length == 0)) {
            var newValue = this.inputMask;
            for (var i = 0; i < value.length; i++) {
                newValue = newValue.replace("x", value[i]);
            }
            this.el.nativeElement.value = newValue;
        }

        // Unformat phone number if already formatted but not complete numbers
        if ((value.replace(/[^0-9]/g, "").length < this.inputMask.split("x").length - 1)
            && (value.replace(/[0-9]/g, "").length != 0)) {
            this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^0-9]/g, "");
        }
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e = <KeyboardEvent>event;
        const value: string = this.el.nativeElement.value;
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
            // Let it happen, don't do anything
            return;
        }

        // No input mask
        if(!this.inputMask || this.inputMask.split("x").length - 1 == 0) {
            if ((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57)) {
                return;
            } else {
                e.preventDefault();
                return;
            }
        }

        // Don't allow more than specified numbers, but allow when mask is 0
        if ((value.replace(/[^0-9]/g, "").length == this.inputMask.split("x").length - 1) && (this.inputMask.split("x").length - 1 != 0)) {
            e.preventDefault();
            return;
        }

        // Allow numeric characters
        if ((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57)) {
            return;
        }

        // Don't allow anything else
        e.preventDefault();
    }
}

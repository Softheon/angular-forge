import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Float]'
})
export class FloatDirective {
    regexStr = '^([-](?![.]))?[0-9]*[.]?[0-9]*$';
    constructor(private el: ElementRef) { }

    @Input() Float: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e = <KeyboardEvent>event;
        if (this.Float) {
            if ([46, 8, 9, 27, 13, 190].indexOf(e.keyCode) !== -1 ||
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

            const regEx = new RegExp(this.regexStr);
            const newValue = this.el.nativeElement.value + e.key;
            if (regEx.test(newValue)) {
                return;
            } else {
                e.preventDefault();
            }
        }
    }
}

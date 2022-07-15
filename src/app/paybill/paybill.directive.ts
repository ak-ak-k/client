import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPaybill]',
})
export class PaybillDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
}

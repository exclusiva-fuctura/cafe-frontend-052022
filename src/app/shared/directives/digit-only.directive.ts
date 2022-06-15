import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[digitOnly]'
})
export class DigitOnlyDirective {

  constructor(
    public ref: ElementRef
  ) { }

  @HostListener('input', ['$event']) onInput(event: any) {
      this.ref.nativeElement.value = event.target.value.replace(/[^\d]+/g, "");
  }
}

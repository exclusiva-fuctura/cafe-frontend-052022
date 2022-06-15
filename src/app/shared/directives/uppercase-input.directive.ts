import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[uppercase]'
})
export class UppercaseInputDirective {

  constructor(
    public ref: ElementRef
  ) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
  }

}

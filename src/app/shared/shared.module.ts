import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';
import { DigitOnlyDirective } from './directives/digit-only.directive';



@NgModule({
  declarations: [
    UppercaseInputDirective,
    DigitOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UppercaseInputDirective,
    DigitOnlyDirective
  ]
})
export class SharedModule { }

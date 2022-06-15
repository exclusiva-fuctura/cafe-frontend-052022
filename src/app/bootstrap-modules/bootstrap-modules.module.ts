import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';

export const bootstrap = [
  TabsModule.forRoot(),
  CarouselModule.forRoot(),
  ButtonsModule.forRoot(),
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    bootstrap
  ],
  exports: [
    bootstrap
  ]
})
export class BootstrapModulesModule { }

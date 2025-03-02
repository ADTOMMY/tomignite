import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COM010RoutingModule } from './com010-routing.module';
import { COM010P010Component } from './com010-p010/com010-p010.component';


@NgModule({
  declarations: [
    COM010P010Component
  ],
  imports: [
    CommonModule,
    COM010RoutingModule
  ]
})
export class COM010Module { }

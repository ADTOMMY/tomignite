import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ABO010RoutingModule } from './abo010-routing.module';
import { ABO010P010Component } from './abo010-p010/abo010-p010.component';


@NgModule({
  declarations: [
    ABO010P010Component
  ],
  imports: [
    CommonModule,
    ABO010RoutingModule
  ]
})
export class ABO010Module { }

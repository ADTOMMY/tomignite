import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ART010P010Component } from './art010-p010/art010-p010.component';
import { ART010RoutingModule } from './art010-routing.module';



@NgModule({
  declarations: [
    ART010P010Component
  ],
  imports: [
    CommonModule,
    ART010RoutingModule
  ]
})
export class ART010Module { }

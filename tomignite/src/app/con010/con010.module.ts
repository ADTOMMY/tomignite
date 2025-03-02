import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CON010RoutingModule } from './con010-routing.module';
import { CON010P010Component } from './con010-p010/con010-p010.component';


@NgModule({
  declarations: [
    CON010P010Component
  ],
  imports: [
    CommonModule,
    CON010RoutingModule
  ]
})
export class CON010Module { }

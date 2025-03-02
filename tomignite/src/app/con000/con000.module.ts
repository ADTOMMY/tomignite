import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CON000FromMailAddredssComponent } from './con000-from-mail-addredss/con000-from-mail-addredss.component';
import { CON000SubjectComponent } from './con000-subject/con000-subject.component';
import { CON000BodyComponent } from './con000-body/con000-body.component';


/**
 * 問合せメール入力値モジュール
 */
@NgModule({
  declarations: [
    CON000FromMailAddredssComponent,
    CON000SubjectComponent,
    CON000BodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CON000Module { }

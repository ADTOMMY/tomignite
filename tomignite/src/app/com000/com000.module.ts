import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COM000HeaderComponent } from './com000-header/com000-header.component';
import { COM000FooterComponent } from './com000-footer/com000-footer.component';

/**
 * 共通部品モジュール
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    COM000HeaderComponent,
    COM000FooterComponent
  ],
  exports: [
    COM000HeaderComponent,
    COM000FooterComponent
  ]
})
export class COM000Module { }

import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP010Module } from './app010/app010.module';
import { COM000Module } from './com000/com000.module';
import { RouterModule } from '@angular/router';

/** 日本語のロケールデータを反映させる */
registerLocaleData(localeJa);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP010Module,
    COM000Module,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
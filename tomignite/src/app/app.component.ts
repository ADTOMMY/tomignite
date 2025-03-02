import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COM000Module } from './com000/com000.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, COM000Module]
})
export class AppComponent {
  title = 'tomignite';
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ART010P010Component } from './art010-p010/art010-p010.component';

const routes: Routes = [{ path: 'p010', component: ART010P010Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ART010RoutingModule { }

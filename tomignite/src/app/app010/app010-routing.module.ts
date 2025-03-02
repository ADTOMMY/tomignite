import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP010P010Component } from './app010-p010/app010-p010.component';

const routes: Routes = [{ path: '010', component: APP010P010Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APP010RoutingModule { }

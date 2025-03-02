import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABO010P010Component } from './abo010-p010/abo010-p010.component';

const routes: Routes = [{ path: '', component: ABO010P010Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ABO010RoutingModule { }

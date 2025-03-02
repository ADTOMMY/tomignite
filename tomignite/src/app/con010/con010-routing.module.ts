import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CON010P010Component } from './con010-p010/con010-p010.component';

const routes: Routes = [{ path: '', component: CON010P010Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CON010RoutingModule { }

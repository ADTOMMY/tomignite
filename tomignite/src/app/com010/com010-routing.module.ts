import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COM010P010Component } from './com010-p010/com010-p010.component';

const routes: Routes = [{ path: '', component: COM010P010Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class COM010RoutingModule { }

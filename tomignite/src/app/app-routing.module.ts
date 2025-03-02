import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP010Component } from './app010/app010.component';

// ここにパスを追加していく 
export const routes: Routes = [
    { path: '', component: APP010Component},
    { path: 'art010', loadChildren: () => import('./art010/art010.module').then(m => m.ART010Module) },
    { path: 'app010', loadChildren: () => import('./app010/app010.module').then(m => m.APP010Module) },
    { path: 'com010', loadChildren: () => import('./com010/com010.module').then(m => m.COM010Module) },
    { path: 'con010', loadChildren: () => import('./con010/con010.module').then(m => m.CON010Module) },
    { path: 'abo010', loadChildren: () => import('./abo010/abo010.module').then(m => m.ABO010Module) }
];

@NgModule({
      // http://xxxx/art010にアクセスした際、ART010Moduleがサーバからロードされる
      imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
      exports: [RouterModule]
})
export class AppRoutingModule { }
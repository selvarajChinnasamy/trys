import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }

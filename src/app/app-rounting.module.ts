import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';


const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:name',
    component: DetailComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }

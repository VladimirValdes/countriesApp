import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CountriesGridComponent } from './countries-grid/countries-grid.component';
import { LoadingComponent } from './loading/loading.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    NavbarComponent,
    CountriesGridComponent,
    LoadingComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    NavbarComponent,
    CountriesGridComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }

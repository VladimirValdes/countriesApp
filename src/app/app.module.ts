import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { AppRountingModule } from './app-rounting.module';

// Modulos
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ComponentsModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

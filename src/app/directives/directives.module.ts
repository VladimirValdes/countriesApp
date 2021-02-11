import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeDirective } from './dark-mode.directive';



@NgModule({
  declarations: [
    DarkModeDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DarkModeDirective
  ]
})
export class DirectivesModule { }

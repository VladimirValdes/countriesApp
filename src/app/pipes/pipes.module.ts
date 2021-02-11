import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteNamePipe } from './complete-name.pipe';
import { CommasPipe } from './commas.pipe';



@NgModule({
  declarations: [
    CompleteNamePipe,
    CommasPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompleteNamePipe,
    CommasPipe

  ]
})
export class PipesModule { }

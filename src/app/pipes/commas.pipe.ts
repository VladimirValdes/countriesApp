import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commas'
})
export class CommasPipe implements PipeTransform {

  transform(value: string, index: number, total: number): string {


    if ( index !== total) {
      value = value + ',';
    }

    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { CountryResponse } from '../interfaces/country-response';
import { CountryService } from '../services/country.service';

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  countries: CountryResponse[] = [];
  completeName: string;

  constructor( private countrySevice: CountryService) {

    this.countries = this.countrySevice.countries;
  }

  transform(code: string): string {

    this.countries.forEach( country => {
 
      if ( country.alpha3Code === code) {

        const position = country.name.indexOf('(');
        this.completeName = country.name;

        if ( position !== -1) {
          this.completeName =  this.completeName.slice(0, position);
        }
      }

    });



    return this.completeName;
  }

}

import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CountryResponse } from 'src/app/interfaces/country-response';

@Component({
  selector: 'app-countries-grid',
  templateUrl: './countries-grid.component.html',
  styleUrls: ['./countries-grid.component.scss']
})
export class CountriesGridComponent implements OnInit {

  @Input() countries: CountryResponse[] = [];



  constructor( private route: Router ) {
   }

  ngOnInit(): void {

  }

  goDetail( name: string ): void {
    this.route.navigate(['/detail', name]);
  }

}

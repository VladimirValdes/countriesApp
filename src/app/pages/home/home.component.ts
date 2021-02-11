import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountryResponse } from 'src/app/interfaces/country-response';
import { CountryService } from 'src/app/services/country.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public optActive = false;
  public optionSelect: string;
  public options: string[];

  public countries: CountryResponse[] = [];
  public loading: boolean;


  private subscription: Subscription = new Subscription();



  constructor( private countryServices: CountryService,
               private alertsService: AlertsService ) {

    this.loading = true;
    this.optionSelect = 'Filter by Region';
    this.options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

   }


  ngOnInit(): void {
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  agregarOpcion( opcion: string): void {
      this.optionSelect = opcion;
      this.optActive = false;

      this.loading = true;

      this.subscription.add(

        this.countryServices.getRegion( opcion ).subscribe( region => {
          this.countries = region;
          this.loading = false;
        })

      );

  }

  searchCountry( name: string ): void {

    this.loading = true;

    if (name.length === 0) {
        this.getCountries();
        return;
    }

    this.subscription.add(

    this.countryServices.getCountry( name ).subscribe( country => {
      console.log(country);
      this.optionSelect = 'Filter by Region';

      if ( country === null) {
          this.alertsService.mostrarAlerta('This country does not exits');
          this.getCountries();
          return;
      }

      this.countries = country;
      this.loading = false;
    })
    );

  }

  getCountries(): void {

    this.subscription.add(
      this.countryServices.getCountries().subscribe( countries => {
        this.countries = countries;
        this.loading = false;
      })
    );
  }


}

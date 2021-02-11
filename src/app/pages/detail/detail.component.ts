import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryResponse } from 'src/app/interfaces/country-response';
import { CountryService } from '../../services/country.service';
import { AlertsService } from '../../services/alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  loading: boolean;
  code: string;
  country: CountryResponse;

  private subscribe: Subscription = new Subscription();

  constructor( private router: Router,
               private activatedRouter: ActivatedRoute,
               private countryServices: CountryService,
               private alertsService: AlertsService) {

      this.code = this.activatedRouter.snapshot.paramMap.get('name');
      this.loading = true;

   }


  ngOnInit(): void {

    this.subscribe.add(
    this.countryServices.getCountrybyCode( this.code ).subscribe( c => {

       if ( c === null) {
          this.loading = false;
          this.alertsService.mostrarAlerta('This country does not exits');
          this.backHome();
       }

       this.country = c;
       this.loading = false;

    })
    );
  }

  getBorder( code: string): void {
    this.loading = true;
    this.subscribe.add(
      this.countryServices.getCountrybyCode( code ).subscribe( c => {
        this.country = c;
        this.loading = false;
      })
    );
  }

  backHome(): void {
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }


}

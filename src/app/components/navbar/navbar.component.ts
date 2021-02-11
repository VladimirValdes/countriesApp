import { Component, OnInit, Renderer2, ViewChildren } from '@angular/core';
// import { DarkModeService } from '../../services/dark-mode.service';
import { DarkModeDirective } from '../../directives/dark-mode.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public clickSwitch = false;

  constructor( ) {

    this.clickSwitch = JSON.parse( localStorage.getItem('darkMode'));
  }

  ngOnInit(): void {
  }

 

 
}

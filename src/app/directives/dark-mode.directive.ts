import { Directive, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkMode]'
})
export class DarkModeDirective {

  active = false;
  @Output() clickActive: EventEmitter<boolean> = new EventEmitter();

  constructor(private render: Renderer2) {
      this.active = JSON.parse( localStorage.getItem('darkMode') );

      console.log(this.active);
      this.addDarkMode();
   }


   @HostListener('click', ['$event'])
    public onClick( event: any ): void {

      this.active = !this.active;

      this.clickActive.emit(this.active);

      this.addDarkMode();

    }

  
  addDarkMode(): void {
    if ( this.active ) {
        localStorage.setItem('darkMode', JSON.stringify(this.active));
        this.guardarStorage();
    } else {
        localStorage.setItem('darkMode', JSON.stringify(this.active));
        this.guardarStorage();
    }


  }

  private guardarStorage(): void {

    if ( JSON.parse( localStorage.getItem('darkMode'))) {
      this.render.removeClass(document.body, 'theme-light');
      this.render.addClass(document.body, 'theme-dark');
    } else {
      this.render.removeClass(document.body, 'theme-dark');
      this.render.addClass(document.body, 'theme-light');
    }
  }

}

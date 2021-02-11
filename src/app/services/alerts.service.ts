import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  mostrarAlerta( msj: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: msj
    });
  }
}

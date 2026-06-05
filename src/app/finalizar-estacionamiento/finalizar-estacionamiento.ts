import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-finalizar-estacionamiento',
  imports: [],
  templateUrl: './finalizar-estacionamiento.html',
  styleUrl: './finalizar-estacionamiento.css',
})
export class FinalizarEstacionamiento {

constructor(private router: Router) {}

volver() {
  this.router.navigate(['/dashboard']);
}

}

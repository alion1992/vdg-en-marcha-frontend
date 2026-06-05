import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-estacionamiento',
  imports: [FormsModule, DatePipe],
  templateUrl: './iniciar-estacionamiento.html',
  styleUrl: './iniciar-estacionamiento.css'
})
export class IniciarEstacionamiento {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/dashboard']);
  }

  fechaActual = new Date();

  kilometros = 0;

}
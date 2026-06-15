import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule,DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { ShellyService } from '../servicios/shelly-service';

@Component({
  selector: 'app-iniciar-estacionamiento',
  imports: [FormsModule, DatePipe,CommonModule],
  templateUrl: './iniciar-estacionamiento.html',
  styleUrl: './iniciar-estacionamiento.css'
})
export class IniciarEstacionamiento {

  fechaActual = new Date();

  kilometros = 0;

  puertaAbierta = false;

  constructor(
    private router: Router,
    private shellyService: ShellyService
  ) {}

  volver() {
    this.router.navigate(['/dashboard']);
  }

  abrirPuerta() {

    this.shellyService
      .abrirPuerta()
      .subscribe({

        next: () => {

          this.puertaAbierta = true;

          console.log('Puerta abierta');

        },

        error: err => {

          console.error(err);

        }

      });
  }
}
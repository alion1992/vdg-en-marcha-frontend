import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ShellyService } from '../servicios/shelly-service'

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  usuario: any;

  constructor(
    private router: Router,
    private shellyService: ShellyService
  ) {

    const usuarioGuardado =
      localStorage.getItem('usuario');

    if (usuarioGuardado) {

      this.usuario =
        JSON.parse(usuarioGuardado);

    }

  }

  abrirPuerta() {

    this.shellyService
      .abrirPuerta()
      .subscribe({

        next: () => {

          console.log('Puerta abierta');

        },

        error: error => {

          console.error(error);

        }

      });

  }

  cerrarSesion() {

    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);

  }

}
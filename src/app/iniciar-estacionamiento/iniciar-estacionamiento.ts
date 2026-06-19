import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { RegistroService } from '../servicios/registro-service';

@Component({
  selector: 'app-iniciar-estacionamiento',
  imports: [
    FormsModule,
    DatePipe,
    CommonModule
  ],
  templateUrl: './iniciar-estacionamiento.html',
  styleUrl: './iniciar-estacionamiento.css'
})
export class IniciarEstacionamiento
  implements OnInit, OnDestroy {

  fechaActual = new Date();

  kilometros = 0;

  registroActivo = false;

  fechaEntrada?: Date;

  contador = '00:00:00';

  private timer?: any;

  constructor(
    private router: Router,
    private registroService: RegistroService
  ) {}

  ngOnInit() {

    this.cargarRegistroActivo();

  }

  ngOnDestroy() {

    if (this.timer) {
      clearInterval(this.timer);
    }

  }

  volver() {

    this.router.navigate(['/dashboard']);

  }

  cargarRegistroActivo() {

    this.registroService
      .obtenerRegistroActivo()
      .subscribe({

        next: (response: any) => {

          if (response.activo) {

            this.registroActivo = true;

            this.fechaEntrada =
              new Date(
                response.fechaHoraEntrada
              );

            this.iniciarContador();
          }

        }

      });

  }

  registrarEntrada() {

    this.registroService
      .registrarEntrada(
        this.kilometros
      )
      .subscribe({

        next: () => {

          this.fechaEntrada =
            new Date();

          this.registroActivo = true;

          this.iniciarContador();

        }

      });

  }

  registrarSalida() {

    this.registroService
      .registrarSalida()
      .subscribe({

        next: () => {

          this.registroActivo = false;

          this.contador = '00:00:00';

          this.fechaEntrada = undefined;

          clearInterval(this.timer);

        }

      });

  }

  iniciarContador() {

    this.timer = setInterval(() => {

      if (!this.fechaEntrada) {
        return;
      }

      const diferencia =
        Date.now()
        - this.fechaEntrada.getTime();

      const horas =
        Math.floor(
          diferencia / 3600000
        );

      const minutos =
        Math.floor(
          (diferencia % 3600000)
          / 60000
        );

      const segundos =
        Math.floor(
          (diferencia % 60000)
          / 1000
        );

      this.contador =
        `${horas.toString().padStart(2, '0')}:`
        + `${minutos.toString().padStart(2, '0')}:`
        + `${segundos.toString().padStart(2, '0')}`;

    }, 1000);

  }

}
import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { RegistroService } from '../servicios/registro-service';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css'
})
export class Historial implements OnInit {

  registros: any[] = [];

  kmTotales = 0;

  trayectos = 0;

  constructor(
    private router: Router,
    private registroService: RegistroService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {

    this.registroService
      .obtenerHistorial()
      .subscribe({

        next: (data: any[]) => {

          this.registros = data;

          this.trayectos =
            data.length;

          this.kmTotales =
            data.reduce(
              (suma, r) =>
                suma + (r.kilometros || 0),
              0
            );
            this.cdr.detectChanges();

        }

      });

  }

  volver() {

    this.router.navigate([
      '/dashboard'
    ]);

  }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css'
})
export class Historial {

  constructor(private router: Router) {}

  registros = [
    {
      fecha: '05/06/2026',
      entrada: '08:15',
      salida: '14:25',
      kilometros: 4.5
    },
    {
      fecha: '04/06/2026',
      entrada: '08:08',
      salida: '14:20',
      kilometros: 5.1
    },
    {
      fecha: '03/06/2026',
      entrada: '08:21',
      salida: '14:30',
      kilometros: 3.9
    }
  ];

  volver() {
    this.router.navigate(['/dashboard']);
  }
}
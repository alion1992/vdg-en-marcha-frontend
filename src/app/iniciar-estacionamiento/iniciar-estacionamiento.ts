import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-iniciar-estacionamiento',
  imports: [FormsModule, DatePipe],
  templateUrl: './iniciar-estacionamiento.html',
  styleUrl: './iniciar-estacionamiento.css'
})
export class IniciarEstacionamiento {

  fechaActual = new Date();

  kilometros = 0;

}
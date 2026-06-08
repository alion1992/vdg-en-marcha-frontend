import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  dni = '';
  nombre = '';
  apellidos = '';
  email = '';
  password = '';
  curso = '';

  constructor(
    private authService: AuthService
  ) {}

  registrar() {

    this.authService.register({

      dni: this.dni,
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password,
      curso: this.curso

    }).subscribe({

      next: () => {

        alert('Usuario registrado');

      },

      error: err => {

        console.error(err);

        alert('Error al registrar');

      }

    });

  }
}
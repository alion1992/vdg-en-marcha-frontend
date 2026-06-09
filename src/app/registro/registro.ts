import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
    private authService: AuthService, private router:Router,
    private messageService: MessageService
    
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

        this.messageService.add({
        severity: 'success',
        summary: 'Registro completado',
        detail: 'Usuario registrado correctamente',
        life: 3000
      });
        this.router.navigate(['/login']);

      },

      error: err => {

        console.error(err);

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se ha podido registrar el usuario',
          life: 3000
        });

      }

    });

  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  usuario = '';
  nombre = '';
  apellidos = '';
  email = '';
  password = '';
  mostrarPassword = false;
  

  constructor(
    private authService: AuthService, private router:Router,
    private messageService: MessageService
    
  ) {}

  registrar(form: NgForm) {
    console.log('ee')
    
    if (form.invalid) {

    this.messageService.add({
      severity: 'warn',
      summary: 'Formulario incompleto',
      detail: 'Debes rellenar todos los campos obligatorios',
      life: 3000
    });

    return;
    }
    const errorDni =
  

  
    this.authService.register({

      usuario: this.usuario,
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password
      

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
          detail: err.error.message,
          life: 3000
        });

      }

    });

  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}
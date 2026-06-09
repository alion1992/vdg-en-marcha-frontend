import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../servicios/auth-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  dni = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  login() {
    
    this.authService.login({
      
  
      dni: this.dni,
      password: this.password
      
    }).subscribe({

      next: (usuario: any) => {

        localStorage.setItem(
          'usuario',
          JSON.stringify(usuario)
        );

        this.router.navigate(['/dashboard']);
      },

      error: (error) => {

        console.error(error);

        this.messageService.add({
  severity: 'error',
  summary: 'Credenciales incorrectas',
  detail: 'Revisa el DNI y la contraseña',
  life: 3000
});
      }
    });
  }
}
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../servicios/auth-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

dni = '';
password = '';

constructor(
  private router: Router,
  private authService: AuthService
) {}

login() {

  this.authService.login({

    dni: this.dni,
    password: this.password

  }).subscribe({

    next: usuario => {

      localStorage.setItem(
        'usuario',
        JSON.stringify(usuario)
      );

      this.router.navigate(['/dashboard']);
    },

    error: () => {

      alert('Credenciales incorrectas');

    }

  });

}
}
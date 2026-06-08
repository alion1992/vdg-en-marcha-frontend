import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {}

  login() {
    // Aquí más adelante validarás contra Spring Boot
    this.router.navigate(['/dashboard']);
  }
}
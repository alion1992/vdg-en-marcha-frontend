import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css'
})
export class Mapa {

  constructor(
    private router: Router
  ) {}

  volver() {

    this.router.navigate([
      '/dashboard'
    ]);

  }

}
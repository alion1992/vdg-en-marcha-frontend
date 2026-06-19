import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl =
    environment.apiUrl + '/registros';

  constructor(
    private http: HttpClient
  ) {}

  registrarEntrada(
    kilometros: number
  ) {

    return this.http.post(
      `${this.apiUrl}/entrada`,
      {
        kilometros
      }
    );
  }

  registrarSalida() {

    return this.http.post(
      `${this.apiUrl}/salida`,
      {}
    );
  }

  obtenerRegistroActivo() {

    return this.http.get<any>(
      `${this.apiUrl}/activo`
    );
  }

  obtenerHistorial() {

    return this.http.get<any[]>(
      `${this.apiUrl}/historial`
    );
  }

}
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShellyService {

  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl + '/shelly';

  abrirPuerta() {

    return this.http.post(
      `${this.apiUrl}/abrir`,
      {}
    );

  }
}

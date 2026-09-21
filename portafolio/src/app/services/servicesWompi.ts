import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesWompi {
  private apiBackendUrl = 'https://tu-api.com';

  constructor(private http: HttpClient) {}

  IniciarSesion(datos: any): Observable<any> {
    // Envía la información de la compra a tu backend para generar el token de pago
    return this.http.post<any>(`${this.apiBackendUrl}/pse`, datos);
  } 
  
}

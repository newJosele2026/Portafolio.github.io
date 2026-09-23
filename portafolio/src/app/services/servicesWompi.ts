import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesWompi {
  private apiBackendUrl = 'https://tu-api.com';
  constructor(private http: HttpClient) {}

  //1
  IniciarSesion(datos: any): Observable<any> {
    // Envía la información de la compra a tu backend para generar el token de pago
    return this.http.post<any>(`${this.apiBackendUrl}/pse`, datos);
  } 
  //Paso 2 — Genera una referencia única de pago
  //Paso 3 — Genera una firma de integridad
  //Paso 4 — Prepara una URL de redirección para el momento de finalizar el pago
  //Paso 5 — Ten en cuenta los parámetros obligatorios y opcionales de una transacción
  //Paso 6 — Escoge un método de integración de checkout
  //Paso 7 — Escucha el evento de una transacción en tu servidor con un webhook

}

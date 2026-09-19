import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-contacto',
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  /**
   * Enlace a PayPal para recibir donaciones.
   */
  paypalUrl = 'https://paypal.me/hermanjosegarciapach';
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicesWompi } from '../../services/servicesWompi';

const PATREON_ICON = `assets/svg/patreon.svg`;
const PAYPAL_ICON = `assets/svg/paypal.svg`;
const WOMPI_ICON = `assets/svg/Wompi_ContraccionPrincipal.svg`;

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, 
    FormsModule, MatIconModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  /**
   * Enlaces para recibir donaciones.
   */
  paypalUrl = 'https://paypal.me/hermanjosegarciapach';
  patreonUrl = 'https://patreon.com/newDevJosele2026?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink';
  wompiUrl = 'https://checkout.wompi.co/l/VPOS_zJkYzv';
  
  private iconRegistry = inject(MatIconRegistry);
  
  private sanitizer = inject(DomSanitizer);
  cargando = false;
  PSE_PNG = `assets/pse-logo-png_seeklogo-428096-gimp.png`;

  constructor() {
    
    this.iconRegistry.addSvgIcon(
      'patreon',
      this.sanitizer.bypassSecurityTrustResourceUrl(PATREON_ICON)
    );
    this.iconRegistry.addSvgIcon(
      'paypal',
      this.sanitizer.bypassSecurityTrustResourceUrl(PAYPAL_ICON)
    );
    this.iconRegistry.addSvgIcon(
      'wompi',
      this.sanitizer.bypassSecurityTrustResourceUrl(WOMPI_ICON)
    );
  }

  iniciarPagoWompi() {
    
  } 
  
}

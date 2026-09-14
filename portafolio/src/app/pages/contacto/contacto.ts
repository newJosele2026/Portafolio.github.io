import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule,MatButtonModule,MatInputModule,
    MatFormFieldModule,FormsModule,MatIconModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  /*private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  constructor() {
    // Registrar el SVG externo dándole un nombre identificador
    this.iconRegistry.addSvgIcon(
      'whatsapp', 
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/whatsapp-symbol-logo-svgrepo-com.svg')
    );
  }*/
}

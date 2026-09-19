import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/component/footer/footer';
import { MenuComponent } from './shared/component/menuComponent/menuComponent';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const WHATSAPP_ICON = `assets/svg/whatsapp-symbol-logo-svgrepo-com.svg`;
@Component({
  selector: 'app-root',
  imports: [MenuComponent, RouterOutlet, Footer, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  constructor() {
    this.iconRegistry.addSvgIcon(
      'whatsapp',
      this.sanitizer.bypassSecurityTrustResourceUrl(WHATSAPP_ICON)
    );
  }
}

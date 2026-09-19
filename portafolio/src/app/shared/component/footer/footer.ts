import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const FACEBOOK_ICON = `assets/svg/facebook.svg`;
const INSTAGRAM_ICON = `assets/svg/instagram.svg`;
const LINKEDIN_ICON = `assets/svg/linkedin-svgrepo-com.svg`;
const GITHUB_ICON = `assets/svg/github.svg`;
@Component({
  selector: 'app-footer',
  imports: [CommonModule,MatButtonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  constructor() {
    this.iconRegistry.addSvgIcon(
      'facebook',
      this.sanitizer.bypassSecurityTrustResourceUrl(FACEBOOK_ICON)
    );
    this.iconRegistry.addSvgIcon(
      'instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl(INSTAGRAM_ICON)
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl(LINKEDIN_ICON)
    );
        this.iconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl(GITHUB_ICON)
    );
  }
}

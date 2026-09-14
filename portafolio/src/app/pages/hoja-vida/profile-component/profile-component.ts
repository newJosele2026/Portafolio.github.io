import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule,MatCardModule],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.scss',
})
export class ProfileComponent {
fullName = signal<string>('Herman José García Pacheco');
  summary = signal<string>(
    'Ingeniero de Sistemas con más de 6 años de experiencia en desarrollo de software. ' +
    'Experiencia realizando la migración de arquitecturas monolíticas a microservicios, automatización ' +
    'de procesos con robots de web scraping y modernización de aplicaciones críticas en el sector ' +
    'financiero y legal. Manejo integral de bases de datos relacionales y prácticas ágiles (Scrum).'
  );
}

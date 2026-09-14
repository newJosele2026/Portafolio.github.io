import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-proyecto',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './proyecto.html',
  styleUrl: './proyecto.scss',
})
export class Proyecto {
  figmaUrl =
    'https://www.figma.com/design/7t0cxI6gI2aHvwkOcnQo46/Servicios-freelance?node-id=0-1&p=f&t=ZoKEKEOKlHot4wie-0';

  proyectos: ProyectoCard[] = [
    {
      nombre: 'Servicios Freelance',
      descripcion:
        'Diseño UI/UX de una landing page para ofrecer servicios freelance, trabajado íntegramente en Figma con componentes y sistema de estilos.',
      tecnologias: ['Figma', 'Diseño UI/UX', 'Landing Page', 'Prototipo'],
      enlace: 'https://www.figma.com/design/7t0cxI6gI2aHvwkOcnQo46/Servicios-freelance?node-id=0-1&p=f&t=ZoKEKEOKlHot4wie-0',
      textoEnlace: 'Abrir en Figma',
      icono: 'design_services',
      preview: true,
    },
    {
      nombre: 'Currículum Vitae',
      descripcion:
        'Hoja de vida interactiva desarrollada con HTML y CSS, con diseño responsivo y descarga directa en PDF.',
      tecnologias: ['HTML', 'CSS', 'Bootstrap'],
      enlace: 'https://newjosele2026.github.io/CV-stich.github.io/index.html',
      textoEnlace: 'Visitar sitio',
      icono: 'description',
      preview: false,
    },
    {
      nombre: 'FullArte',
      descripcion:
        'Sitio web de arte y creatividad con galería de obras y contenido visual, publicada como proyecto web estático.',
      tecnologias: ['HTML', 'CSS', 'GitHub Pages'],
      enlace: 'https://newjosele2026.github.io/FullArte.github.io/',
      textoEnlace: 'Visitar sitio',
      icono: 'palette',
      preview: false,
    },
  ];

  proximamente: number[] = [1, 2, 3];

  private readonly figmaEmbed: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const encoded = encodeURIComponent(this.figmaUrl);
    this.figmaEmbed = sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.figma.com/embed?embed_host=share&url=${encoded}`,
    );
  }

  previewUrl(proyecto: ProyectoCard): SafeResourceUrl | null {
    return proyecto.preview ? this.figmaEmbed : null;
  }
}

export interface ProyectoCard {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  enlace: string;
  textoEnlace: string;
  icono: string;
  preview: boolean;
}
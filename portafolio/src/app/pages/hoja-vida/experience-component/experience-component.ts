import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  imports: [CommonModule],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
experiences = signal<ExperienceItem[]>([
    {
      role: 'Desarrollador',
      company: 'Codesa — Proyecto SuperFlex',
      period: 'Mar. 2023 – Sept. 2025',
      bullets: [
        'Resolví bugs de producción sobre JDK 11 y Angular 13, mejorando la estabilidad del aplicativo SuperFlex.',
        'Diseñé e implementé nuevos módulos web y operaciones CRUD bajo metodología Scrum.',
        'Optimicé queries SQL de bajo rendimiento, reduciendo tiempos de respuesta en procesos críticos.',
        'Administré pipelines CI/CD con Jenkins para automatizar despliegues continuos.',
        'Onboarding técnico de nuevos integrantes del equipo, incluyendo transferencia de conocimiento del proyecto.'
      ]
    },
    {
      role: 'Development II',
      company: 'SII Colombia — Proyectos BBVA',
      period: 'Ago. 2022 – Nov. 2022',
      bullets: [
        'Participé en el proyecto Sunset Datacenter para el apagado del Datacenter de Teusaquillo, analizando la migración de 88 aplicaciones a AWS y OpenShift.',
        'Desarrollé en JavaScript (framework CELLS) contenedores Docker con ELK para el proyecto Genetics, generando trazabilidad de información visualizada en Kibana.'
      ]
    },
    {
      role: 'Ingeniero de Desarrollo y Soporte',
      company: 'Smart Law Tech',
      period: 'Jul. 2019 – Jul. 2022',
      bullets: [
        'Desarrollé robots en Java (JDK8) para automatizar tareas de web scraping.',
        'Construí interfaces web en Angular 10 con consumo de servicios REST en JSON.',
        'Lideré la transición de un sistema monolítico hacia microservicios, dividiendo la lógica de negocio del backend.',
        'Gestioné consultas y objetos PL-SQL (Stored Procedures, Triggers) en SQL Server.',
        'Brindé soporte técnico y mesa de ayuda a los equipos internos de la empresa.'
      ]
    },
    {
      role: 'Ingeniero de Desarrollo',
      company: 'Cooperativa CAIJECI',
      period: 'Oct. 2018 – Jun. 2019',
      bullets: [
        'Desarrollé la aplicación Uberlaw utilizando el framework Ionic.',
        'Construí robots en Java (JDK8) para automatización de procesos de web scraping.'
      ]
    }   
  ]);
}
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

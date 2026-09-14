import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skill-component',
  imports: [CommonModule, MatIconModule],
  templateUrl: './skill-component.html',
  styleUrl: './skill-component.scss',
})
export class SkillComponent {

  skillGroups = signal<SkillCategory[]>([
    {
      icon: 'code',
      category: 'Lenguajes',
      items: ['Java', 'C#', 'JavaScript', 'PHP', 'Bash', 'C++']
    },
    {
      icon: 'layers',
      category: 'Frameworks / Plataformas',
      items: ['Ionic', 'Angular (10/13/15/21)', 'Spring Boot', '.NET', 'Selenium']
    },
    {
      icon: 'database',
      category: 'Bases de Datos',
      items: ['SQL Server', 'PostgreSQL', 'Oracle', 'SQLite'],
      extraText: 'PL-SQL, Stored Procedures, Triggers'
    },
    {
      icon: 'cloud',
      category: 'Cloud / DevOps',
      items: ['AWS', 'OpenShift', 'Docker', 'ELK Stack', 'Jenkins (CI/CD)']
    },
    {
      icon: 'account_tree',
      category: 'Metodologías & Roles',
      items: ['Scrum', 'Arquitectura de Microservicios']
    },
    {
      icon: 'account_circle',
      category: 'Roles Desempeñados',
      items: ['Fullstack', 'FrontEnd', 'Backend', 'Scrum Master', 'QA', 'Development', 'Soporte', 'DBA']
    }
  ]);
}
export interface SkillCategory {
  icon: string;
  category: string;
  items: string[];
  extraText?: string;
}
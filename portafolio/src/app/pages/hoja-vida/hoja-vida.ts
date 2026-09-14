import { Component, inject } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { SkillComponent } from './skill-component/skill-component';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education-component/education-component';
import { ExperienceComponent } from './experience-component/experience-component';
import { ProfileComponent } from './profile-component/profile-component';
@Component({
  selector: 'app-hoja-vida',
  imports: [CommonModule,ProfileComponent,SkillComponent,ExperienceComponent,EducationComponent,MatCardModule],
  templateUrl: './hoja-vida.html',
  styleUrl: './hoja-vida.scss',
})
export class HojaVida {
  cargar=false;
  contenidoHtml: SafeHtml = '';
}

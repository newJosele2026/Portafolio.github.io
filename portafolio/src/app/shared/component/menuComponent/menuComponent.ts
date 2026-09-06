import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { Header } from '../header/header';
@Component({
  selector: 'app-menu-component',
  imports: [RouterLink, MatButtonModule,MatIconModule, MatCardModule,Header],
  templateUrl: './menuComponent.html',
  styleUrl: './menuComponent.scss',
})
export class MenuComponent {}

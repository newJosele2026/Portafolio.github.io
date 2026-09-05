import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-menu-component',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './menuComponent.html',
  styleUrl: './menuComponent.scss',
})
export class MenuComponent {}

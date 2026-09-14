import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,MatButtonModule,MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}

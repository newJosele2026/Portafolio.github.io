import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/component/footer/footer';
import { MenuComponent } from './shared/component/menuComponent/menuComponent';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

import { Component, signal } from '@angular/core';
import { MenuComponent } from './menuComponent/menuComponent';

@Component({
  selector: 'app-root',
  imports: [MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portafolio');
}

import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-menu-component',
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, OverlayModule],
  templateUrl: './menuComponent.html',
  styleUrl: './menuComponent.scss',
  
})
export class MenuComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;
  someMethod() {
    this.trigger?.openMenu();
  }
}

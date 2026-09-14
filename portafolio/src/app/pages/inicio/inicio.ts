import { Component, VERSION } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-inicio',
  imports: [MatSidenavModule,MatIconModule,MatCardModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
    angularVersion = VERSION.full;
}

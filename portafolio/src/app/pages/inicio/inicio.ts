import { Component, VERSION } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inicio',
  imports: [MatSidenavModule,MatCardModule, MatButtonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
    angularVersion = VERSION.full;
}

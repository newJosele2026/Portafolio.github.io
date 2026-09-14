import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCarouselModule,RouterModule], // Remova o PerfilusuarioComponent daqui
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}

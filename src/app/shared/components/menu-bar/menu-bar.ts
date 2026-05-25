import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './menu-bar.html',
  styleUrls: ['./menu-bar.css'],
})
export class MenuBar {}

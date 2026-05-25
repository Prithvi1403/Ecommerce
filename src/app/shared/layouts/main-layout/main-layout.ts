import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { TopBar } from '../../components/top-bar/top-bar';

import { Navbar } from '../../components/navbar/navbar';

import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  selector: 'app-main-layout',

  standalone: true,

  imports: [
    RouterOutlet,
    TopBar,
    Navbar,
    MenuBar
  ],

  templateUrl: './main-layout.html',

  styleUrls: ['./main-layout.css']
})

export class MainLayout {

}
// src/app/toolbar/toolbar.component.ts

import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = 'My Application';
  navigationLinks = [
    {path: '/home', label: 'Home'},
    {path: '/about', label: 'About'},
    {path: '/contact', label: 'Contact'}
  ];
}

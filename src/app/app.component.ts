import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { DirectivesComponent } from './components/directives/directives.component';
import { DeferedComponent } from './components/defered/defered.component';
import { UpdateComponent } from './components/update/update.component';
import { OtherComponent } from './components/other/other.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DirectivesComponent,
    DeferedComponent,
    UpdateComponent,
    OtherComponent,
    HomeComponent,
    RouterLink,
    MenubarModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-17-poc';

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Standalone Components',
        routerLink: ['/standalone'],
      },
      {
        label: 'Nuevas directivas',
        routerLink: ['/directives'],
      },
      {
        label: 'Componentes diferidos',
        routerLink: ['/defered'],
      },
      {
        label: 'Otras cosas',
        routerLink: ['/other'],
      },
    ];
  }
}

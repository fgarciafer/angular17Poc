import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Directive } from '@angular/core';
import { DeferedComponent } from './components/defered/defered.component';
import { UpdateComponent } from './components/update/update.component';
import { OtherComponent } from './components/other/other.component';
import { HomeComponent } from './components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { StandaloneComponent } from './components/standalone/standalone.component';

export const routes: Routes = [
  { path: '', title: 'Home Page', component: DirectivesComponent },
  { path: 'standalone', title: 'Standalone Components', component: StandaloneComponent },
  { path: 'directives', title: 'Directivas', component: DirectivesComponent },
  { path: 'defered', title: 'Diferidos', component: DeferedComponent },
  { path: 'update', title: 'Actualizar', component: UpdateComponent },
  {
    path: 'other',
    title: 'Otras cosas',
    loadComponent: () =>
      import('./components/other/other.component').then(
        (mod) => mod.OtherComponent
      ),
  },
];

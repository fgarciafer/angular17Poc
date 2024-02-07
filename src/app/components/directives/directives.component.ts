import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, ListboxModule, CheckboxModule, FormsModule, RadioButtonModule, PanelModule ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  cities = [{name: 'Albacete', id: 1}, {name: 'Valencia', id:2}, {name: 'Madrid', id:3}];

  loggedIn = true;

  accessLevel = 'moderator';

  forvar = `
  ...
  cities = [{name: 'Albacete', id: 1}, {name: 'Valencia', id:2}, {name: 'Madrid', id:3}];
  ...

  @for (ci of cities; track ci.id) {
    <p>{{ ci.name }}</p>
  } @empty {
    Empty list of cities
  }`

  ifvar = `
    @if (loggedIn) {
      <p>The user is logged in</p>
    } @else {
      <p>The user is not logged in</p>
    } `

  switchvar = `
    @switch (accessLevel) {
      @case ('admin') { <p>You are an Admin</p> }
      @case ('moderator') { <p>You are a Moderator</p> }
      @default { <p>You are other</p> }
    }`  
}

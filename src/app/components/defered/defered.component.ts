import { Component } from '@angular/core';
import { Defered1Component } from '../defered1/defered1.component';
import { Defered2Component } from '../defered2/defered2.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-defered',
  standalone: true,
  imports: [Defered1Component, Defered2Component, ButtonModule ],
  templateUrl: './defered.component.html',
  styleUrl: './defered.component.css'
})
export class DeferedComponent {

}

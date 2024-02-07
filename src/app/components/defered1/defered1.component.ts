import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defered1',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './defered1.component.html',
  styleUrl: './defered1.component.css'
})
export class Defered1Component {

  @Input({required: true}) bgColor!: string;
  constructor () {
    const start = Date.now();
    while(Date.now() - start < 2000 ) {
    }
    console.log('Cargado')
  }
}

import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  ssr1= `ng new --ssr`
  ssr2= `ng add @angular/ssr`
  signal1 = `foo = signal('foo')`
  signal2 = `foo.set(’new value’)`
  signal3 = `foo.update(number => number + 1);`
  signal4=`obj = signal({ name: 'name' });  
obj.mutate((v) => v.name = 'newName');  
array = signal([]) array.mutate(list => list.push(newValue));`
  signal5=`<p>{{foo()}}</p>`
  signal6=`effect(()=> console.log(\`The value of \${foo()} has changed\`));`
}

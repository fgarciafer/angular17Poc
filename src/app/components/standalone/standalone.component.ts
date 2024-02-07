import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.css'
})
export class StandaloneComponent {
code =         
  `
  @Component({
    standalone: true,
    selector: 'photo-gallery',
    imports: [ImageGridComponent, MatButtonModule],
    template: \`
      ... <image-grid [images]="imageList"></image-grid>
      <button mat-button>Next Page</button>
      ...
    \`,
  })
  export class PhotoGalleryComponent {
    // component logic
  }`

  existing = `
  @NgModule({
    declarations: [AlbumComponent],
    exports: [AlbumComponent], 
    imports: [PhotoGalleryComponent],
  })
  export class AlbumModule {}`

  boot = `
  // in the main.ts file
  import {bootstrapApplication} from '@angular/platform-browser';
  import {PhotoAppComponent} from './app/photo.app.component';

  bootstrapApplication(PhotoAppComponent);`
  
  lazy= `
  const routes: Routes = [

    { path: '',
   loadChildren: () => import('./stand-alone/stand-alone.component').then(m => m.StandAloneComponent) },
     
  ]
  `
}

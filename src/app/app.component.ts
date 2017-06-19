import { Component } from '@angular/core';
import { CineComponent } from './cine/cine.component';
import { TeatroComponent } from './teatro/teatro.component';
import { MusicaComponent } from './musica/musica.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private component;
  constructor() {
    this.component = CineComponent;
  }

  changeComponent(componente) {
    switch (componente) {
      case 'Musica':
        this.component = MusicaComponent;
        break;
      case 'Teatro':
        this.component = TeatroComponent;
        break;
      default:
        this.component = CineComponent;
        break;
    }
  }
}


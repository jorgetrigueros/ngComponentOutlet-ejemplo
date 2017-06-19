import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CineComponent } from './cine/cine.component';
import { TeatroComponent } from './teatro/teatro.component';
import { MusicaComponent } from './musica/musica.component';

@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    TeatroComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [
    CineComponent,
    TeatroComponent,
    MusicaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

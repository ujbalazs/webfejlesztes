import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NotesComponent } from './notes/notes.component';
import { CatAndPrioComponent } from './cat-and-prio/cat-and-prio.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CatAndPrioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

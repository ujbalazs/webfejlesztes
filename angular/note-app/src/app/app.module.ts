import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { NotesComponent } from './notes/notes.component';
import { CatAndPrioComponent } from './cat-and-prio/cat-and-prio.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule} from '@angular/material'; 
import { CategoryService } from './services/category.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CatAndPrioComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
 
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

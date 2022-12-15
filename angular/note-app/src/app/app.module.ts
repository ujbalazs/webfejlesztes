import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { NotesComponent } from './notes/notes.component';
import { CatAndPrioComponent } from './cat-and-prio/cat-and-prio.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { CategoryService } from './services/category.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriorityService } from './services/priority.service';
import { NoteService } from './services/note.service';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginRegisterService } from './services/login-register.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './services/token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CatAndPrioComponent,
    LoginRegisterComponent
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
    BrowserAnimationsModule,

  ],
  providers: [CategoryService,
    PriorityService,
    NoteService,
    LoginRegisterService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }

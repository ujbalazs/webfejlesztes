import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatAndPrioComponent } from './cat-and-prio/cat-and-prio.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NotesComponent } from './notes/notes.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
{ path: '', component: NotesComponent, canActivate : [AuthGuard] },
{ path: 'cat_prio', component: CatAndPrioComponent, canActivate : [AuthGuard] },
{ path: 'login', component: LoginRegisterComponent,}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

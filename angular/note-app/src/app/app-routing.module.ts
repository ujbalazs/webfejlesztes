import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatAndPrioComponent } from './cat-and-prio/cat-and-prio.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [{ path: '', component: NotesComponent },
{ path: 'cat_prio', component: CatAndPrioComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

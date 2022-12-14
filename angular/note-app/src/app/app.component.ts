import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router){
  }


  notesButton(){
    if(this.authService.checkLoggedIn() == true){
      this.router.navigateByUrl('');
    }
  }

  catPrioButton(){
    if(this.authService.checkLoggedIn() == true){
      this.router.navigateByUrl('cat_prio');
    }
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('login');
  }


 
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginRegisterService } from '../services/login-register.service';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {


  name: string;
  password:string;
  loggedIn: boolean = false;
  error:boolean = false;
  

  constructor(private logRegService:LoginRegisterService, private authService: AuthService) { }

  ngOnInit(): void {
  }


  login(){
    this.logRegService.login(this.name, this.password).then(
      (data)=>{
        
        let res:any = data.body;
        this.authService.saveToken(res.token);
        this.error = false;
        this.loggedIn = this.authService.checkLoggedIn();
        
      }
    ).catch(e =>{
      this.error = true;
      console.log(e)
    })
  }

}

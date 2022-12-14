import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  loginError:boolean;
  registerError:boolean;
  valid:boolean;
  registered:boolean;
  

  constructor(private logRegService:LoginRegisterService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  resetInput(){
    this.name=null;
    this.password=null;
    this.loginError = false;
    this.registerError = false;
  }

  login(){
    if(this.name == "" || this.name == null || this.password == "" || this.password == null){
      this.valid = false;
     }else{
      this.valid = true;
      this.logRegService.login(this.name, this.password).then(
        (data)=>{
          let res:any = data.body;
          this.authService.saveToken(res.token);
          this.resetInput();
          this.registered =false;
          this.router.navigateByUrl('');
        }
      ).catch(e =>{
        this.registerError = false;
        this.loginError = true;
        this.registered =false;
        console.log(e)
      })
    }
  }

  register(){
    if(this.name == "" || this.name == null || this.password == "" || this.password == null){
      this.valid = false;
     }else{
    this.logRegService.register(this.name, this.password).then(
      ()=>{
        this.registered =true;
        this.resetInput();
      }
    ).catch(e =>{
      this.registered =false;
      this.loginError = false;
      this.registerError = true;
      console.log(e)
    })

  }}

}

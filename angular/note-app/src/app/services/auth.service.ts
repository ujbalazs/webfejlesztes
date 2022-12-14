import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  saveToken(token:string){
    localStorage.removeItem("token")
    localStorage.setItem("token", token);
  }

  checkLoggedIn(){
    const token = localStorage.getItem("token")
    if (token) {
      return true;
    }

    return false;
  }

}

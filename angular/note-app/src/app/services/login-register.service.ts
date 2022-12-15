import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

const loginUrl = "http://localhost:8080/api/user/login";
const registerUrl = "http://localhost:8080/api/user/register";

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private httpClien: HttpClient) { }


  register(name: string, password: string) {
    return this.httpClien.post(registerUrl, {
      "name": name,
      "password": password

    }, {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).toPromise();
  }

  login(name: string, password: string) {
    return this.httpClien.post(loginUrl, {
      "name": name,
      "password": password
    }, {
      observe: 'response',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).toPromise();
  }







}

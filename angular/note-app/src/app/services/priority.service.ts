import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Priority } from './Priority';

const loadUrl = "http://localhost:8080/api/priorities";
const deleteUrl = "http://localhost:8080/api/priority/delete/";
const saveUrl = "http://localhost:8080/api/priority/save";

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private httpClien: HttpClient) { }

  loadPriority() {
    return this.httpClien.get<Priority[]>(loadUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).toPromise();
  }

  deletePriority(id: string) {
    return this.httpClien.delete(deleteUrl + id, {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).toPromise();
  }

  savePriority(name: string) {
    return this.httpClien.post(saveUrl, {
      "name": name
    }, {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).toPromise();
  }

}

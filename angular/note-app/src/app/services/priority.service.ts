import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

interface Priority {
  id: number,
  name: string

}

const url = "http://localhost:8080/api/priorities";

const loadOptions = {

  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:admin')
  }),
  params: new HttpParams().set('','')
};

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private httpClien: HttpClient) { }

  loadPriority(){
    return this.httpClien.get<Priority[]>(url, loadOptions).toPromise();
 }

}

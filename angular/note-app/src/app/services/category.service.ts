import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

interface Category {
  id: number,
  name: string

}

const url = "http://localhost:8080/api/categories";

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

export class CategoryService {

  constructor(private httpClien: HttpClient) { }


  loadCategory(){
     return this.httpClien.get<Category[]>(url, loadOptions).toPromise();
  }



}

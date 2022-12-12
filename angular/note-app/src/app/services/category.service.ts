import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Category } from './Category';

const loadUrl = "http://localhost:8080/api/categories";
const deleteUrl = "http://localhost:8080/api/category/delete/";
const saveUrl = "http://localhost:8080/api/category/save";


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClien: HttpClient) { }


  loadCategory(){
     return this.httpClien.get<Category[]>(loadUrl, 
      {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa('admin:admin')
        }),      
      }).toPromise();
  }

  deleteCategory(id:string){
    return this.httpClien.delete(deleteUrl + id, {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:admin')
      }),
    }).toPromise();
  }

  saveCategory(name:string){
    return this.httpClien.post(saveUrl, {
      "name": name
    } ,{
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:admin')
      }),
    }).toPromise();
  }



}

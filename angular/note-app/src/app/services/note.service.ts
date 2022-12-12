import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';
import { Note } from './Note';
import { Priority } from './Priority';



const loadUrl = "http://localhost:8080/api/notes";
const saveUrl = "http://localhost:8080/api/note/save";


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClien: HttpClient) { }



  loadNote(){
    return this.httpClien.get<Note[]>(loadUrl, 
     {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'Basic ' + btoa('admin:admin')
       }),      
     }).toPromise();
 }

 saveNote(text:string, cats:Category[], prio:Priority){
  return this.httpClien.post(saveUrl, {
    text: text,
    priority: prio,
    categories:cats},
    {
    observe: 'response',
    responseType: 'blob',
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin')
    }),
  }).toPromise();
}


}

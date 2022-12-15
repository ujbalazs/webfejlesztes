import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';
import { Note } from './Note';
import { Priority } from './Priority';


const loadUrl = "http://localhost:8080/api/notes";
const saveUrl = "http://localhost:8080/api/note/save";
const deleteUrl = "http://localhost:8080/api/note/delete/"
const updateUrl = "http://localhost:8080/api/note/update/"

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClien: HttpClient) { }

  loadNote() {
    return this.httpClien.get<Note[]>(loadUrl,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }).toPromise();
  }

  saveNote(text: string, cats: Category[], prio: Priority) {
    return this.httpClien.post(saveUrl, {
      text: text,
      priority: prio,
      categories: cats
    },
      {
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }).toPromise();
  }

  deleteNote(id: string) {
    return this.httpClien.delete(deleteUrl + id, {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).toPromise();
  }

  updateNote(id: string, text: string, cats: Category[], prio: Priority) {
    return this.httpClien.post(updateUrl + id, {
      text: text,
      priority: prio,
      categories: cats
    },
      {
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }).toPromise();
  }

}

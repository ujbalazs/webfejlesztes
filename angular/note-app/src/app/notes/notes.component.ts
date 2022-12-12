import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../services/Category';
import { CategoryService } from '../services/category.service';
import { Note } from '../services/Note';
import { NoteService } from '../services/note.service';
import { Priority } from '../services/Priority';
import { PriorityService } from '../services/priority.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  categories?:Category[]
  priorities?:Priority[]
  notes?:Note[]

  selectedPrio!:Priority
  selectedCats!:Category[]
  text!:string

  showEditor: boolean = false;

  toppings = new FormControl('');
  constructor(private catService: CategoryService, private prioService: PriorityService, private noteService:NoteService) { }

  ngOnInit(): void {
    this.loadCats();
    this.loadPrios();
    this.loadNotes();
  }

  
  loadCats(){
    this.catService.loadCategory().then(
      data => {
        this.categories = data;
        console.log(data)
      }
    );
  }

  loadPrios(){
    this.prioService.loadPriority().then(data =>{
       this.priorities = data;
    });
   
  }

  loadNotes(){
    this.noteService.loadNote().then(data =>{
      this.notes = data;
    })

  }

  saveNotes(){
    this.noteService.saveNote(this.text, this.selectedCats, this.selectedPrio).then(()=>{
      this.loadNotes();
    })
  }


  newNote(){
    if(this.showEditor == false){
      this.showEditor = true
    }else{this.showEditor = false}
  }

  cancelEdit(){
    this.showEditor = false
  }
}

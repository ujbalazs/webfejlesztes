import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
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

  categories:Category[]
  priorities:Priority[]
  notes:Note[]
  selectedPrio:Priority
  selectedPrioId:number
  updateId: string;
  selectedCats:Category[] = []
  selectedCatsIds:number[] = []
  text:string
  showEditor: boolean = false;
  editing: boolean = false;

  toppings = new FormControl('');
  constructor(private catService: CategoryService, private prioService: PriorityService, private noteService:NoteService) { }

  ngOnInit(): void {
    this.loadCats();
    this.loadPrios();
    this.loadNotes();
  }

  selectCatAndPrio(){
    this.selectedCats = [];
    for(let i = 0; i < this.categories.length; i++){
      for(let j = 0; j < this.selectedCatsIds.length; j++){
        if(this.categories[i].id == this.selectedCatsIds[j] ){
          this.selectedCats.push(this.categories[i]);
        }
      }
    }
    for(let i = 0; i < this.priorities.length; i++){
        if(this.priorities[i].id == this.selectedPrioId ){
          this.selectedPrio =this.priorities[i]
       } 
    }
  }

  deleteSelection(){
    this.selectedCats = [];
    this.selectedCatsIds = [];
    this.selectedPrio = null;
    this.selectedPrioId = null;
    this.text = null; 
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

  saveNote(){
    this.selectCatAndPrio();
    this.noteService.saveNote(this.text, this.selectedCats, this.selectedPrio).then(()=>{
      this.loadNotes();
      this.deleteSelection()  
    })
  }

  deleteNote(id:string){
     this.noteService.deleteNote(id).then(()=>{
      this.loadNotes();
    })
  }

  setItemToUpdate(id: string, text: string, cats:Category[], prio:number){
    this.updateId = id;
    this.editing = true;
    this.showEditor = true;
    this.deleteSelection()
    this.text = text;
    for(let i =0; i< cats.length; i++){
      this.selectedCatsIds.push(cats[i].id)
    }
    this.selectedPrioId = prio;
    this.selectCatAndPrio();

  }

  updateNote(id){
    this.selectCatAndPrio();
    this.noteService.updateNote(id, this.text, this.selectedCats, this. selectedPrio).then(()=>{
      this.loadNotes();
      this.deleteSelection()   
    })
  }

  newNote(){
    this.deleteSelection()
    this.editing = false;
    if(this.showEditor == false){
      this.showEditor = true
    }else{this.showEditor = false}
  }

  cancelEdit(){
   this.deleteSelection()
    this.showEditor = false
  }

}

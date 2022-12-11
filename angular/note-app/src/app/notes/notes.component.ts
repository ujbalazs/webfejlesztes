import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  showEditor: boolean = false;

  constructor() { }

  ngOnInit(): void {
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

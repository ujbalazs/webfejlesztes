import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-and-prio',
  templateUrl: './cat-and-prio.component.html',
  styleUrls: ['./cat-and-prio.component.scss']
})
export class CatAndPrioComponent implements OnInit {

   catEditorShow:boolean = false;
   prioEditorShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  newCat(){
    if(this.catEditorShow == false){
      this.catEditorShow = true
    }else{this.catEditorShow = false}
  }

  newPrio(){
    if(this.prioEditorShow == false){
      this.prioEditorShow = true
    }else{this.prioEditorShow = false}
  }

}

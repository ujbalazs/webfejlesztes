import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { PriorityService } from '../services/priority.service';





@Component({
  selector: 'app-cat-and-prio',
  templateUrl: './cat-and-prio.component.html',
  styleUrls: ['./cat-and-prio.component.scss']
})

export class CatAndPrioComponent implements OnInit {

   catEditorShow:boolean = false;
   prioEditorShow:boolean = false;
   categories:any[] | undefined
   priorities:any[] | undefined
   

  constructor(private catService: CategoryService, private prioService: PriorityService) { }

  ngOnInit(): void {
    this.loadcats();
    this.loadprios();
  }


  loadcats(){
    this.catService.loadCategory().then(
      data => {
        this.categories = data;
        console.log(data)
      }
    );
  }

  loadprios(){
    this.prioService.loadPriority().then(data =>{
       this.priorities = data;
    });
   
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

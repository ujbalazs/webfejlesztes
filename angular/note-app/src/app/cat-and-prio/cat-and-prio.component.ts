import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Category } from '../services/Category';
import { CategoryService } from '../services/category.service';
import { Priority } from '../services/Priority';
import { PriorityService } from '../services/priority.service';


@Component({
  selector: 'app-cat-and-prio',
  templateUrl: './cat-and-prio.component.html',
  styleUrls: ['./cat-and-prio.component.scss'],
  animations: [
    trigger(
      'animation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('400ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({ opacity: 1}),
          animate('400ms', style({ opacity: 0}))
        ])
      ]
    )
  ]
})

export class CatAndPrioComponent implements OnInit {

   catEditorShow:boolean = false;
   prioEditorShow:boolean = false;
   categories:Category[]
   priorities:Priority[]
   catName: string;
   prioName: string;
   catValid: boolean = false;
   prioValid: boolean = false;
   showBar:boolean = false

  
  constructor(private catService: CategoryService, private prioService: PriorityService) { }

  
  ngOnInit(): void {
    this.loadCats();
    this.loadPrios();
  }

  snackBar(){
    this.showBar = true;
    setTimeout(
      () => {
        this.showBar = false;
      }, 2000);
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

  deleteCat(id:string){
    this.catService.deleteCategory(id).then(() =>{
      this.loadCats();
      this.snackBar();
    })
  }

  deletePrio(id:string){
    this.prioService.deletePriority(id).then(() =>{
      this.loadPrios();
      setTimeout(
        () => {
          this.snackBar()
        }, 200);  
    })
  }

  saveCat(){
    if(this.catName == '' || this.catName == null ){
      this.catValid = true
    }else{
      this.catValid = false
      this.catService.saveCategory(this.catName).then(() =>{
      this.loadCats();
      this.catName = '';
      this.catEditorShow = false;
      setTimeout(
        () => {
          this.snackBar()
        }, 200);  
    })}
  }

  savePrio(){
    if(this.prioName == '' || this.prioName == null ){
      this.prioValid = true
    }else{
      this.prioValid = false
      this.prioService.savePriority(this.prioName).then(() =>{
      this.loadPrios();
      this.prioName = '';
      this.prioEditorShow = false;
      setTimeout(
        () => {
          this.snackBar()
        }, 200);  
    })}
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

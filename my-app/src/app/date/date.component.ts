import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  text : string = "hello";
  data: string[] = ["one", "two"];
  constructor() {
    
   }

   add(item:string){
    this.data.push(item);
   }

   delete(index){
     this.data.splice(index, 1);
   }

  

  ngOnInit() {
  }

}

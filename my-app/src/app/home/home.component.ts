import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let headers = new HttpHeaders();
headers.set('Access-Control-Allow-Credential', 'true');
headers.set('Access-Control-Allow-Origin', '*');
headers.set('Access-Control-Allow-Methods', 'GET');
headers.set('Access-Control-Allow-Headers', 'application/json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string  = "";
  response: any;
  constructor(private http: HttpClient){

  }

  

  search(){
    this.http.get('http://37.140.199.62:82/api/v1/Categories', {headers : headers}).subscribe((response) => {
      
    this.response = response;
      console.log(this.response);
    })
  }
}

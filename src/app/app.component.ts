import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  name:string = '';
  age:number;
  found: boolean;

  constructor(private httpClient: HttpClient){ }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  getProfile(){
    console.log(this.name);
    this.httpClient.get(`https://my-json-server.typicode.com/gmiguel14/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length){
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }
    
    postProfile(){
      console.log(this.name);
      this.httpClient.post(`https://my-json-server.typicode.com/gmiguel14/json-faker-directory/profiles/`, 
      {
        name: 'bruno',
        age: 30
      })
      .subscribe(
        (data:any[]) => {
          console.log(data)
        }
      )
    }
  }

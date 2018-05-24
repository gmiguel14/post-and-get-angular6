import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './models/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucessoService {

  private form: Form[] = [];

  constructor(private httpClient: HttpClient){}

  public getForm(id){

    let observable = this.httpClient.get<any>(`https://swapi.co/api/people/${id}`)
    
    console.log(observable);


    // observable.subscribe(dados => {this.form = dados.any});

    return observable;
    
  }
  
}

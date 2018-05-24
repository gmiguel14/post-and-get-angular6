import { Injectable } from '@angular/core';
import { Form } from './models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  form: Form

  constructor() { }

  public setForm(id: number, title: string, body: string){
    this.form = {
      id: id,
      title: title,
      body: body
    }
  }

  public getForm():Form{
    return this.form;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mensagemErro: boolean = false;

  constructor(private router: Router, private formService: FormService) { }

  public enviar(id: HTMLFormElement, title: HTMLFormElement, body: HTMLFormElement){
    if(id.value !== '' || title.value !== '' || body.value !== ''){

      this.formService.setForm(id.value, title.value, body.value);
      this.router.navigate(['/sucesso']);

    } else {
      this.mensagemErro = true;
    }
  }


  ngOnInit(){

  }
}

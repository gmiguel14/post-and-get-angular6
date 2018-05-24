import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SucessoComponent } from './sucesso/sucesso.component';


const appRoutes: Routes = [
  {path: '', component: FormComponent},
  {path: 'sucesso', component: SucessoComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoCardComponent } from './aluno-card/aluno-card.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
   declarations: [
      AppComponent,
      AlunoCardComponent,
      AlunoFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

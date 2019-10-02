import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoCardComponent } from './aluno-card/aluno-card.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
   declarations: [
      AppComponent,
      AlunoCardComponent,
      AlunoFormComponent,
      CampoColoridoDirective
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

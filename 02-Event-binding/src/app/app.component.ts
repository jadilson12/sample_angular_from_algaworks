import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    nome = 'Ana';
    adicionar() {
      //
    }
  alterarNome(event) {
    const numero = Math.round(Math.random() * 100);
    this.nome = ` Maria ${numero}`;

  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nome = "Calors";
  alunos = [];
  ultimoId = 0;

  adicionar() {
    this.alunos.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}

import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-aluno-form",
  templateUrl: "./aluno-form.component.html",
  styleUrls: ["./aluno-form.component.css"]
})
export class AlunoFormComponent {
  nome = "Carlos";
  @Output('') alunoAdicionado = new EventEmitter();
  ultimoId = 0;

  adicionar() {
    const aluno = {
      id: ++this.ultimoId,
      nome: this.nome
    };
    this.alunoAdicionado.emit(aluno);
  }
}

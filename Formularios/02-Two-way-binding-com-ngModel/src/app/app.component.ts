import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  profissoes = ["Programador", "Empresário", "Pintor"];
  profissao = 'Pintor';

  cliente = new Cliente();

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;
    console.log(form);
    // console.log(this.cliente);
  }
}

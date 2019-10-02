import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nome = "Ana";
  adicionado = false;

  adicionar() {
    this.adicionado = true;
  }
}

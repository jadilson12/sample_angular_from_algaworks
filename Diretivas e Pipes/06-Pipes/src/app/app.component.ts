import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nome = "Jadilson Dias";
  dataAniversario = new Date(1990, 3 , 10);
  preco = 124434.5;
  troco = 0.1212123;
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-aluno-card",
  templateUrl: "./aluno-card.component.html",
  // styleUrls: ["./aluno-card.component.css"]
  styles: [
    `
      .card-body {
        text-transform: uppercase;
        color: blue;
      }
    `
  ]
})
export class AlunoCardComponent {
  @Input() aluno: any;
}

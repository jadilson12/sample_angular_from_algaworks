import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olamundo',
  templateUrl: './olamundo.component.html',
  styleUrls: ['./olamundo.component.css']
})
export class OlamundoComponent implements OnInit {

  nome = 'Maria';
  idade = 20;
  produtos = [
    {nome: 'Arroz'},
    {nome: 'Feijao'},
    {nome: 'Carne'},
    {nome: 'Oleo'},
    {nome: 'Milho'},
    {nome: 'Abacaxi'},
  ];

  getIdade() {
    return this.idade;
  }

  constructor() { }

  ngOnInit() {
  }

}

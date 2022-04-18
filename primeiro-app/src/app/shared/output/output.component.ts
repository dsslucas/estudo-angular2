import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Saída de dados para enviar o evento lá fora, uma vez que tenha o evento emitido (no caso, o clique)
  @Output() public enviarDados = new EventEmitter();

  //Lista
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Lucas Souza", idade: 24 },
    { nome: "Nay", idade: 22 },
    { nome: "Scania 113", idade: 31 }
  ]

  //Pega os dados em uma lista, por clique
  public getDados(event: number) {
    console.log(this.list[event])

    //Envia os dados para o App Component
    this.enviarDados.emit(this.list[event])
  }
}

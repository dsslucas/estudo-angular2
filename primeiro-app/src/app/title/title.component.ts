import { Component, OnChanges, OnInit, SimpleChanges, Input, OnDestroy } from '@angular/core';

//OnInit: Ciclo de vida do Angular

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  //Vantagem do TS: é tipado!
  @Input() public title = "Bem vindo!"

  //Injeção de dependências
  constructor() { }

  //Assim que inicia o componente, ele faz alguma coisa
  ngOnInit(): void {
  }

  //Evento que atualiza a cada update
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Tive uma alteração")
  }

  ngOnDestroy(): void {
    console.log("Componente destruído!")
  }

}

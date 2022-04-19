import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

//O que o HTML base consulta. Decorator!
@Component({
  selector: 'app-root', //Nome
  template: `
    

    <app-food-list></app-food-list>


  ` //Template geral

  //PARA FUNCIONAR O RESTANTE, BASTA COPIAR
  /*
    <app-title *ngIf="destruir"></app-title>
    <p *ngIf="destruir">{{valor}}</p>
    <button (click)="adicionar()" *ngIf="destruir">Adicionar</button>
    <br>
    <app-title *ngIf="destruir"></app-title>
    <button (click)="destruirComponent()">Destruir componente</button>
    <br>
    <app-data-binding></app-data-binding>
    <app-diretivas-estruturais></app-diretivas-estruturais>

        <app-diretivas-atributos>
      <h2>Aulas de Diretrizes de Atributos</h2>
      <hr>
    </app-diretivas-atributos>

    <app-new-component></app-new-component>
    <router-outlet></router-outlet>
    <app-input [contador]="addValue"></app-input>
    <button (click)="remove()">Remove</button> <button (click)="add()">Add</button>

    <br>
    <ng-template [ngIf]="getDados">
      <h6>{{getDados.nome}}</h6>
      <p>{{getDados.idade}}</p>
    </ng-template>
        <app-output (enviarDados)="setDados($event)"></app-output>
  */
})

//Exporta com os componentes, importante para interpolar
//Necessário colocar 'implemnents' no Ciclo de Vida do Angular
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  //Para interpolar
  public valor = 1
  public destruir = true

  constructor() { }

  public adicionar() {
    return this.valor + 1
  }

  public destruirComponent() {
    this.destruir = false
  }

  //Executa quando inicia o Angular
  ngOnInit(): void {
    setTimeout(() => {
      //console.log("Oi")
    }, 5000)
  }

  ngDoCheck(): void {
    //console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    //console.log("ngAfterContentInit()")
  }

  ngAfterContentChecked(): void {
    //console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    //console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    //console.log("ngAfterViewChecked")
  }

  //Para o Input
  //Onde inicia o contador
  public addValue: number = 0

  //Função de adicionar
  public add(){
    this.addValue += 1
  }

  //Remover
  public remove(){
    this.addValue -= 1
  }

  //Para o Output
  public getDados: {nome: string, idade: number} | undefined;

  //Seta os dados no GET. Tipo ANY pega tudo
  public setDados(event: any){
    this.getDados = event
  }
}

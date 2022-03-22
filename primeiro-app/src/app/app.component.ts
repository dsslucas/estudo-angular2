import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

//O que o HTML base consulta. Decorator!
@Component({
  selector: 'app-root', //Nome
  template: `
    <app-title *ngIf="destruir"></app-title>
    {{valor}}
    <button (click)="adicionar()" *ngIf="destruir">Adicionar</button>
    <br>
    <app-title *ngIf="destruir"></app-title>
    <button (click)="destruirComponent()">Destruir componente</button>
    <br>
    <router-outlet></router-outlet>
  ` //Template geral
})

//Exporta com os componentes, importante para interpolar
//Necessário colocar 'implemnents' no Ciclo de Vida do Angular
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  //Para interpolar
  public valor = 1
  public destruir = true
  
  constructor(){}

  public adicionar(){
    return this.valor + 1
  }

  public destruirComponent(){
    this.destruir = false
  }

  //Executa quando inicia o Angular
  ngOnInit(): void {
    setTimeout(() => {
      console.log("Oi")
    }, 5000)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit()")
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Cria valores. Permite que pessoas não injetem codigo aqui
  private poupanca: number = 10
  private carteira: number = 50

  get getPoupanca(){
    return this.poupanca
  }
  get getCarteira(){
    return this.carteira
  }

  public setSacar(value: string): number | undefined{
    const sacar = Number(value)
    console.log(sacar)

    if(isNaN(sacar) || this.poupanca < sacar){
      return
    }

    this.poupanca -= sacar

    return (this.carteira += sacar)
  }

  public setDeposito(value: string): number | undefined{
    const depositar = Number(value)
    console.log(depositar)

    if(isNaN(depositar) || this.carteira < depositar){
      return
    }

    this.carteira -= depositar

    return (this.poupanca += depositar)
  }
}

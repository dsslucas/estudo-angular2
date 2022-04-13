import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if(this.condition){
        this.condition = false
      }
      else{
        this.condition = true
      }

    }, 2000)

  }

  //do If
  public condition: boolean = true
  public conditionClick: boolean = true

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false
    }
    else{
      this.conditionClick = true
    }
  }

  //do For
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Lucas Souza", idade: 24},
    {nome: "Zé", idade: 53},
    {nome: "Isabela", idade: 23},
  ]

  //Adiciona um elemento na lista (ou no array)
  public onClickAddList(){
    this.list.push({nome: 'Nay', idade: 31})
  }

  //No Switch Case
  public nome: string = 'Lucas'
}

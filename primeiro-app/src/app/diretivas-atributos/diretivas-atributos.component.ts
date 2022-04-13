import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {

      //Do Class
      if(this.valor){
        this.valor = false
      }
      else{
        this.valor = true
      }

      //Do Style
      if(this.heightPx == "20px"){
        this.heightPx = "50px"
        this.backgroundColor = "dodgerblue"
      }
      else{
        this.heightPx = "20px"
        this.backgroundColor = "red"
      }

    }, 1000)
  }

  //Ng Class
  public valor:boolean = true

  //Ng Style
  public heightPx: string = "20px"
  public backgroundColor: string = "red"

  //Ng Model
  public nome: string = ""
  public list: Array<{nome: string}> = []
  //Pega o nome digitado e clicado no botão, para salvar em um array
  public salvar(){
    this.list.push({nome: this.nome});
    this.nome = ""
  }

  //NG Template
  public nomeTemplate: string = "Lucas"
  public listTemplate: Array<{nomeTemplate: string}> = [{nomeTemplate: this.nomeTemplate}]
}

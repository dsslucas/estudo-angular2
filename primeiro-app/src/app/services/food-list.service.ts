import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Cada um pode utilizar na injeção de dependências
})

export class FoodListService {

  constructor() { }

  //Cadastro de informações, via array que recebe strings
  private list: Array<string> = [
    "X-Bacon",
    "Caldão de peixe",
    "Ovo frito"
  ]

  public foodList(){
    return this.list
  }

  //Adiciona um valor pro Food List
  public foodListAdd(value: string){
    //Adiciona na lista privada
    return this.list.push(value)
  }
}

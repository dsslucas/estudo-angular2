import { Injectable, EventEmitter } from '@angular/core';

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

  //Evento (PARA O SUBSCRIBE). Precisa se inscrever no comoonente que deseja.
  public emitEvent = new EventEmitter()

  //Quando é ativado, entra o Subscribe, se inscreve no evento. Sempre que o evento se altera, o subsscribe vai retornar o dado

  public foodList() {
    return this.list
  }

  //Adiciona um valor pro Food List
  public foodListAdd(value: string) {
    //Chama a função
    this.foodListAlert(value)

    //Adiciona na lista privada
    return this.list.push(value)
  }

  //Ativa o evento. 
  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }
}

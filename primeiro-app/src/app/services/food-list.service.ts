import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root' //Cada um pode utilizar na injeção de dependências
})

export class FoodListService {

  //Método HTTP para dependência
  constructor(private http: HttpClient) { }

  //Cadastro de informações, via array que recebe strings
  private list: Array<string> = [
    "X-Bacon",
    "Caldão de peixe",
    "Ovo frito"
  ]

  //Contato com o backend. No caso o JSON Server
  private url: string = "http://localhost:3000/"

  //Evento (PARA O SUBSCRIBE). Precisa se inscrever no comoonente que deseja.
  public emitEvent = new EventEmitter()

  //Quando é ativado, entra o Subscribe, se inscreve no evento. Sempre que o evento se altera, o subsscribe vai retornar o dado

  /*
  public foodList() {
    return this.list
  }
  */

  //oBSERVABLE é do Rx Js. Tem que trazer dados
  //O professor criou uma interface para tal
  public foodList(): Observable<Array<FoodList>> {
    //Pega a URL e manda um GET
    return this.http
      .get<Array<FoodList>>(`${this.url}list-food`)
      .pipe(
        res => res,
        error => error
      )
  }

  //Adiciona um valor pro Food List
  /*
  public foodListAdd(value: string) {
    //Chama a função
    this.foodListAlert(value)

    //Adiciona na lista privada
    return this.list.push(value)
  }*/

  //Ativa o evento. 
  /*
  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }
  */

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value)
  }

  //Post com o Pipe.
  //Observable tem que seguir o que vem do food-add.
  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value }).pipe(
      //Pipe faz tratamento
      res => res,
      error => error
    )
  }

  //Edit
  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { nome: value }).pipe(
      //Pipe faz tratamento
      res => res,
      error => error
    )
  }

  //Delete
  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      //Pipe faz tratamento
      res => res,
      error => error
    )
  }
}

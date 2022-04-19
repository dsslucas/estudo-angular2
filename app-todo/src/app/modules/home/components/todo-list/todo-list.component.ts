import { Component, OnInit, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

//Do Check implementa
export class TodoListComponent implements DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  //Sempre que acontecer alguma coisa, vai alterar no componente
  ngDoCheck() {
    this.setLocalStorage()
  }

  //Array vindo de uma interface, ng g interface. Os dados estão em MODEL
  //Os dados são pegos em LocalStorage. Caso não venha dados, é dado um array vazio
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  //Método para excluir
  public deleteItemTaskList(event: number) {
    //Deletando a posição com o nó
    this.taskList.splice(event, 1)
  }

  //Deleta TUDO
  public deleteAllTaskList() {
    //Aparece um Pop-up no navegador
    const confirm = window.confirm("Você realmente deseja deletar tudo?")
    if (confirm) {
      this.taskList = []
    }

  }

  public setEmitTaskList(event: string) {
    //console.log(event)

    //Adiciona um item na lista
    this.taskList.push({ task: event, checked: false })
  }

  //Valida a lista
  public validationInput(event: string, index: number) {
    //Verifica se a lista já criada está com título vazio
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?")

      if (confirm) {
        //Deleta caso a pessoa queira
        this.deleteItemTaskList(index)
      }
    }
  }


  public setLocalStorage(){
    //Tem que pegar o Local Storage e verificar se tem dados


    //Se taskList existir...
    if (this.taskList) {

      //Ordena as coisas por valor do Checked, todos os valores checados vão para baixo e o oposto vice-versa
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))

      //Alterações no Local Storage
      localStorage.setItem("list", JSON.stringify(this.taskList))

    }
  }
}

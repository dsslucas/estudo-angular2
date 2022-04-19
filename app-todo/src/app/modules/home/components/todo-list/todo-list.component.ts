import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Array vindo de uma interface, ng g interface. Os dados estão em MODEL
  public taskList: Array<TaskList> = []

  //Método para excluir
  public deleteItemTaskList(event: number){
    //Deletando a posição com o nó
    this.taskList.splice(event, 1)
  }

  //Deleta TUDO
  public deleteAllTaskList(){
    //Aparece um Pop-up no navegador
    const confirm = window.confirm("Você realmente deseja deletar tudo?")
    if(confirm){
      this.taskList = []
    }

  }

  public setEmitTaskList(event: string){
    //console.log(event)

    //Adiciona um item na lista
    this.taskList.push({task: event, checked: false})
  }

}

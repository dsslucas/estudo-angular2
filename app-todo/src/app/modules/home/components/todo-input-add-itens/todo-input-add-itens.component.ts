import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Decorator
  @Output() public emitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ""

  //Adiciona itens
  public submitItemTaskList() {
    //console.log(this.addItemTaskList)

    //TRIM remove TODOS os espaços
    this.addItemTaskList = this.addItemTaskList.trim()

    //Evita enviar com tecla Enter com conteúdo vazio
    if (this.addItemTaskList) {

      //Quando o evento acontece, realiza a emissão
      this.emitItemTaskList.emit(this.addItemTaskList)

      //Quando tiver vazio e pressionar Enter
      this.addItemTaskList = ""
    }

  }
}

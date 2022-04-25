import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  //Para usar do lado de fora
  public foodList: Array<FoodList> = [] //pode receber mais coisa

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    ) //"Se inscreva e fique escutando"

    //Evento subscribe, vindo do food-app
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você adicionou o item ${res.nome} na lista.`)
        return this.foodList.push(res)
      }
    );
  }

  //Edita a comida
  public foodListEdit(value: string, id: number){
    return this.foodListService.foodListEdit(value, id).subscribe(
      res => res,
      error => error
    )
  }

  //Deleta a comida
  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        //Precisa informar a lista e informar que não existe o ID na lista
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id //Se não tiver o ID na lista, ele remove e retorna apenas o que tem na lista
          }
        )
      },
      error => error
    )
  }
}

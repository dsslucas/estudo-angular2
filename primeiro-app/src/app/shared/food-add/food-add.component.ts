import { Component, OnInit } from '@angular/core';

//Serviço
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  //Serviço deve ser adicionado ao construtor. Dependência!
  constructor(private foodListService: FoodListService) {

  }

  ngOnInit(): void {
  }

  public listAddItem(value: string){
    //Adiciona valores na lista
    return this.foodListService.foodListAdd(value).subscribe(
      res => this.foodListService.foodListAlert(res), //Vai pros Serviços como broadcast
      error => error
    )
  }
}

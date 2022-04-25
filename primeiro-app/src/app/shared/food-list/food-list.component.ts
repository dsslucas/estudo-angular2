import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList()

    //Evento subscribe, vindo do food-app
    this.foodListService.emitEvent.subscribe(
      res => alert(`Você adicionou o item ${res} na lista.`)
    );
  }
  //Para usar do lado de fora, considerando ser privado
  public foodList: Array <string> = []
}

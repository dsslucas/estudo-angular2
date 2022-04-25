import { NgModule } from '@angular/core';

//NG Class, componentes, etc
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


//Decorator, com toda a inicialização do módulo
@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //Necessário pro NG Model
    HttpClientModule //Poderes do HTTP para GET e etc
  ],

  //Necessário para o App Component (principal)
  exports: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ]
})
export class SharedModule { }

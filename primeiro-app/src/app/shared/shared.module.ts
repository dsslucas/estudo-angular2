import { NgModule } from '@angular/core';

//NG Class, outros
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';


//Decorator, com toda a inicialização do módulo
@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],

  //Necessário para o App Component (principal)
  exports: [
    NewComponentComponent,
    InputComponent,
    OutputComponent
  ]
})
export class SharedModule { }

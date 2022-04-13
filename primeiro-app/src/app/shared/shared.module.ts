import { NgModule } from '@angular/core';

//NG Class, outros
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';


//Decorator, com toda a inicialização do módulo
@NgModule({
  declarations: [
    NewComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewComponentComponent
  ]
})
export class SharedModule { }

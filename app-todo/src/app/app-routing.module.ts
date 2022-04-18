import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';

//Array de objetos, cada objeto é uma página
const routes: Routes = [{
  //LOCALHOST, SITE OU OUTRO, seguido pelo nome do componente
  path: "", component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

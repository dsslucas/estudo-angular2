import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

//Vem do Lazy Loading. AQUI É FILHO@
const routes: Routes = [
  {path: '', component: HomeComponent}, //Página principal
  {path: 'details/:id', component: DetailsComponent} // Detalhes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

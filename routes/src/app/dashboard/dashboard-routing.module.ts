import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages, do Dashboard
import { HomeComponent } from './pages/home/home.component';

//Páginas


const routes: Routes = [
    {path: '', component: HomeComponent}
];
//PATH: Rota principal (ou o que define depois do www.blablabla.com/)
//Component: página, que renderiza
//PathMath pega TUDO e "pertence a si"
// "**" ROTA CORINGA, NÃO EXISTE. Para tal, redireciona

@NgModule({
  imports: [RouterModule.forChild(routes)], //Rota principal
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

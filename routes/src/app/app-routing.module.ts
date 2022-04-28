import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Páginas
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  /* SEM CARREGAMENTO TARDIO (LAZY LOADING) */
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'sobre', component: SobreComponent, children: [
    {path: ':id/:username', component: SobreComponent}, //Passou do / reconhece ID
  ]},

  //Lazy Loading
  //Carrega todo o módulo no loadChildren, dando import no módulo que queira carregar tardiamente
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )},

  {path: '404', component: PageErrorComponent},
  {path: '**', redirectTo: '404'}
];
//PATH: Rota principal (ou o que define depois do www.blablabla.com/)
//Component: página, que renderiza
//PathMath pega TUDO e "pertence a si"
// "**" ROTA CORINGA, NÃO EXISTE. Para tal, redireciona

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Rota principal
  exports: [RouterModule]
})
export class AppRoutingModule { }

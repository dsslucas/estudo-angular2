import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './shared/pages/account/account.component';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { HomeComponent } from './shared/pages/home/home.component';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';


//Criação das rotas
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    //Pode ter vários CanActivate, por isso o uso do array
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'core',

    //Configuração inicial do Lazy Loading
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountComponent } from '../pages/account/account.component';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    
    //Pega info de componente especifico
    component: AccountComponent,

    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): 
    Observable<boolean
    | UrlTree>
    | Promise<boolean
    | UrlTree>
    | boolean | UrlTree {

      
      //Tá saindo da rota ou não, resultado que depende do account.component.ts
    return component.exit()
  }
  
}

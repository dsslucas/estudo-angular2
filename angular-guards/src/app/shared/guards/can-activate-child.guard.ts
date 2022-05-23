import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(childRoute.queryParams['account'] === 'admin' && childRoute.queryParams['password'] === '1234'){
        console.log(childRoute)
        console.log(state)
        return true
      }
      console.log(childRoute)
      console.log(state)
    return false;
  }
  
}

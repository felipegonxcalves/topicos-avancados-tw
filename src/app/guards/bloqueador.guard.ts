import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<AppComponent>, CanLoad {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return false;
  }

  canDeactivate(
    component: AppComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

  canLoad(
    route: Route
  ): boolean {
    return false;
  }
  
}

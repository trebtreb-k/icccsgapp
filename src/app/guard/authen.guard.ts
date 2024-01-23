import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthenService } from './../services/authen/authen.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenGuard implements CanActivate {
  constructor(private router: Router, private authen: AuthenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const is = this.authen.authenticationState.value;

    console.log('authen_guard :', is);

    if (is === 'unauthorized') {
      this.router.navigate(['/login']);
      return false;
    }

    if (is === 'authorized') {
      return true;
    }
  }
}

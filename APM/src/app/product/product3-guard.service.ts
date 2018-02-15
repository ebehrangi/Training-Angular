import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class Product3GuardService implements CanActivate {
  /* , state: RouterStateSnapshot */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('ko');
      this._router.navigate(['/product']);
      return false;
    }
    return true;
  }
  constructor(private _router: Router) { }

}

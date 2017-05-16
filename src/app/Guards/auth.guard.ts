import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //已经登录
        if (localStorage.getItem('currentUser')) {
          return true;
        }
         //没有登录跳转到登录页面
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
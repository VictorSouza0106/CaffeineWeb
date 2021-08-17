import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(): boolean {
    // if (this.userService.isLoggedIn()) {
    //   return true;
    // } else {
    //   this.notificationService.notify('Você está deslogado.');
    //   this.router.navigate(['/login']);
      return false;
    }
  }

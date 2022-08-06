import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap  } from 'rxjs';
import { AuthRecluiterService } from '../services/auth-recluiter.service';

@Injectable({
  providedIn: 'root'
})
export class RecluiterGuard implements CanActivate {
 
  constructor(private authRecluiter: AuthRecluiterService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authRecluiter.isLoggedIn$.pipe(tap(isloggedIn => {
      if (!isloggedIn) {
        this.router.navigate(['main'])
      }
    })
    )
  }
}
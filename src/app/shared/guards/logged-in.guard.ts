import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.loaded$.pipe(
      filter(loaded => loaded),
      take(1),
      switchMap(loaded =>
        this.authService.user$.pipe(
          take(1),
          tap(user => {
            if (user) {
              this.router.navigateByUrl('/dashboard');
            }
          }),
          map(user => (user ? false : true))
        )
      )
    );
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(next, state);
  }

  canLoad(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(next, state);
  }
}

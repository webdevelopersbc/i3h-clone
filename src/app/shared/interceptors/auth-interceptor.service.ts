import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor {
  constructor(private authService: AuthService, private snackbar: MatSnackBar, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.loaded$.pipe(
      filter(loaded => loaded),
      take(1),
      mergeMap(() =>
        this.authService.user$.pipe(
          take(1),
          mergeMap(user => {
            if (!user) {
              return next.handle(req).pipe(
                map((e: HttpEvent<any>) => {
                  this.checkLogout(e);
                  return e;
                })
              );
            }
            const token = user.token;
            const authReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + token),
            });
            return next.handle(authReq).pipe(
              map((e: HttpEvent<any>) => {
                this.checkLogout(e);
                return e;
              })
            );
          })
        )
      )
    );
  }

  private checkLogout(e: HttpEvent<any>): void {
    if (e instanceof HttpResponse) {
      if (e.status === 401) {
        this.snackbar.open('Your session has expired. Please login again.', '', { duration: 5000 });
        this.authService.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
      }
    }
  }
}

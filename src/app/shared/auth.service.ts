import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppUser } from '../shared/models/app-user';
import { DecodedJWT } from '../shared/models/decoded-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<AppUser>(null);
  private loadedSubject$ = new BehaviorSubject<boolean>(false);

  user$ = this.userSubject$.asObservable();
  loaded$ = this.loadedSubject$.asObservable();

  constructor(private localStore: StorageMap) {
    this.loadFromLocalStore();
  }

  signIn(token: { access_token: string }): void {
    const decodedToken: DecodedJWT = jwt_decode(token.access_token);

    this.userSubject$.next({
      email: decodedToken.sub.email,
      name: decodedToken.sub.name,
      isAdmin: decodedToken.sub.isAdmin,
      token: token.access_token,
    });

    this.localStore.set('i3hluser', token.access_token).subscribe();
  }

  private loadFromLocalStore(): void {
    this.localStore.get<string>('i3hluser').subscribe((token: string) => {
      if (!token) {
        this.loadedSubject$.next(true);
        return;
      }

      const decodedToken: DecodedJWT = jwt_decode(token);
      const expiration = moment.unix(decodedToken.exp);
      const targetTime = moment().add(15, 'minutes');

      if (expiration.isAfter(targetTime)) {
        this.userSubject$.next({
          email: decodedToken.sub.email,
          name: decodedToken.sub.name,
          isAdmin: decodedToken.sub.isAdmin,
          token,
        });
      }

      this.loadedSubject$.next(true);
    });
  }

  logout(): Observable<void> {
    this.userSubject$.next(null);
    return this.localStore.delete('i3hluser');
  }
}

import { AppUser } from './app-user';

export interface DecodedJWT {
  exp: number;
  iat: number;
  sub: AppUser;
}

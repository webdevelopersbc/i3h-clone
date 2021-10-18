import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  private bcrypt = require('bcrypt');

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<{ sub: any }> {
    const user = await this.usersService.findOneForAuth(email);
    if (user && user.isAdmin) {
      const match = await this.bcrypt.compare(password, user.password);
      if (match) {
        return {
          sub: {
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
          },
        };
      }
      return null;
    }
    return null;
  }

  async login(user: Express.User): Promise<{ access_token: string }> {
    const payload = user;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

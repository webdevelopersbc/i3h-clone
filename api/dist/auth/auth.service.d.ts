/// <reference types="passport" />
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private bcrypt;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        sub: any;
    }>;
    login(user: Express.User): Promise<{
        access_token: string;
    }>;
}

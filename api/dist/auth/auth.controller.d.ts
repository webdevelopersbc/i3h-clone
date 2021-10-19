/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    login(req: Express.Request): Promise<{
        access_token: string;
    }>;
    register(registration: CreateUserDTO): Promise<void>;
}

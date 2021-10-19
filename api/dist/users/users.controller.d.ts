import { UpdateUserDTO } from './dtos/update-user.dtos';
import { AppUser } from './schemas/app-user.schema';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<AppUser[]>;
    update(update: UpdateUserDTO, id: string): Promise<AppUser[]>;
    delete(id: string): Promise<AppUser[]>;
}

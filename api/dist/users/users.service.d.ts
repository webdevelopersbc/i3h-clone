import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/create-user.dto';
import { AppUser } from './schemas/app-user.schema';
import { UpdateUserDTO } from './dtos/update-user.dtos';
export declare class UsersService {
    private userModel;
    private bcrypt;
    constructor(userModel: Model<AppUser>);
    create(createUserDTO: CreateUserDTO): Promise<AppUser>;
    update(updateUserDTO: UpdateUserDTO, id: string): Promise<AppUser>;
    delete(id: string): Promise<AppUser>;
    findAll(): Promise<AppUser[]>;
    findOneByEmail(email: string): Promise<AppUser>;
    findOneForAuth(email: string): Promise<AppUser>;
}

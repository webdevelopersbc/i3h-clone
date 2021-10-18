import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/create-user.dto';
import { AppUser } from './schemas/app-user.schema';
import { UpdateUserDTO } from './dtos/update-user.dtos';


@Injectable()
export class UsersService {
  private bcrypt = require('bcrypt');

  constructor(@InjectModel(AppUser.name) private userModel: Model<AppUser>) {}

  async create(createUserDTO: CreateUserDTO): Promise<AppUser> {
    const password = await this.bcrypt.hash(createUserDTO.password, 10);

    const createdUser = new this.userModel({
      ...createUserDTO,
      password,
      isAdmin: false,
    });
    return createdUser.save();
  }

  async update(updateUserDTO: UpdateUserDTO, id: string): Promise<AppUser> {
    const user = await this.userModel.findOne({email: id});

    if (!user) {
      throw new NotFoundException();
    }

    user.name = updateUserDTO.name;
    user.isAdmin = updateUserDTO.isAdmin;
    return user.save();
  }

  async delete(id: string): Promise<AppUser> {
    const user = await this.userModel.findOne({email: id});

    if (!user) {
      throw new NotFoundException();
    }

    return user.deleteOne();
  }

  async findAll(): Promise<AppUser[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<AppUser> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOneForAuth(email: string): Promise<AppUser> {
    return this.userModel
      .findOne({ email: email.toLowerCase() })
      .select('+password')
      .exec();
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_user_schema_1 = require("./schemas/app-user.schema");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.bcrypt = require('bcrypt');
    }
    async create(createUserDTO) {
        const password = await this.bcrypt.hash(createUserDTO.password, 10);
        const createdUser = new this.userModel(Object.assign(Object.assign({}, createUserDTO), { password, isAdmin: false }));
        return createdUser.save();
    }
    async update(updateUserDTO, id) {
        const user = await this.userModel.findOne({ email: id });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        user.name = updateUserDTO.name;
        user.isAdmin = updateUserDTO.isAdmin;
        return user.save();
    }
    async delete(id) {
        const user = await this.userModel.findOne({ email: id });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user.deleteOne();
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOneByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async findOneForAuth(email) {
        return this.userModel
            .findOne({ email: email.toLowerCase() })
            .select('+password')
            .exec();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(app_user_schema_1.AppUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
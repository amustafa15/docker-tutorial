import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): any;
    findAll(user: any): any;
    findOne(id: string, user: any): any;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}

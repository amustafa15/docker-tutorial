import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): any;
    findAll(userId: string): any;
    findOne(id: number): any;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}

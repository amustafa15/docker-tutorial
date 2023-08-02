import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CartService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCartDto: CreateCartDto): import(".prisma/client").Prisma.Prisma__CartClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        cartNumber: number;
        userId: number;
        productId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(cartId: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        cartNumber: number;
        userId: number;
        productId: number;
    }, unknown> & {})[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CartClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        cartNumber: number;
        userId: number;
        productId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: number, updateCartDto: UpdateCartDto): string;
    remove(id: number): string;
}

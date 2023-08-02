import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): import(".prisma/client").Prisma.Prisma__CartClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        cartNumber: number;
        userId: number;
        productId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(cart: any): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        cartNumber: number;
        userId: number;
        productId: number;
    }, unknown> & {})[]>;
    findOne(id: string, cart: any): import(".prisma/client").Prisma.Prisma__CartClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        cartNumber: number;
        userId: number;
        productId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: string, updateCartDto: UpdateCartDto): string;
    remove(id: string): string;
}

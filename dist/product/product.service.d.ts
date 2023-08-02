import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cost: number;
        count: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(productId: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cost: number;
        count: number;
    }, unknown> & {})[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cost: number;
        count: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}

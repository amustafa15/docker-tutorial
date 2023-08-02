import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cost: number;
        count: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(product: any): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cost: number;
        count: number;
    }, unknown> & {})[]>;
    findOne(id: string, product: any): import(".prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cost: number;
        count: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}

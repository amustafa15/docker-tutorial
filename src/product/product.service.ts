import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  findAll(productId: string) {
    if (!Number.isInteger(productId) ) {
      throw new BadRequestException('Invalid user');
    }

    return this.prisma.product.findMany({
      where: {
        id: Number(productId),
      }
    });
  }

  findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}
  
  create(createCartDto: CreateCartDto) {
    // return 'This action adds a new cart';
    return this.prisma.cart.create({
      data: createCartDto,
    })
  }

  findAll(cartId: string) {
    if (!Number.isInteger(cartId) ) {
      throw new BadRequestException('Invalid user');
    }

    return this.prisma.cart.findMany({
      where: {
        id: Number(cartId),
      }
    });
  }

  findOne(id: number) {
    return this.prisma.cart.findFirst({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}

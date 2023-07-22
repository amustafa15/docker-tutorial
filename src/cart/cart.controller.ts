import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, UnauthorizedException } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetCart } from 'src/auth/decorators/get-cart-decorator';


@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll(@GetCart() cart) {
    const cartId = cart.id
    return this.cartService.findAll(cartId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetCart() cart) {
    if (cart.id != id) {
      throw new UnauthorizedException();
    }
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}

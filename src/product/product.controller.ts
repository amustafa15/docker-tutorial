import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetProduct } from 'src/auth/decorators/get-product-decorator';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@GetProduct() product) {
    const productId = product.id
    return this.productService.findAll(productId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetProduct() product) {
    if (product.id != id) {
      throw new UnauthorizedException();
    }
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/products.dto';
import { ProductsService } from './products.service';

const NOT_FOUND_MESSAGE = 'Product not found';

@Controller('products')
export class ProductsController {
  productsService: ProductsService;

  constructor() {
    // Don't do this in real app
    this.productsService = new ProductsService();
  }

  @Get()
  async listProducts() {
    const productsList = await this.productsService.findAll();

    return Object.values(productsList);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);

    if (!product) {
      throw new NotFoundException(NOT_FOUND_MESSAGE);
    }

    return product;
  }

  @Put('/:id')
  async updateProduct(@Param('id') id: string, @Body() body: CreateProductDto) {
    const product = await this.productsService.update(id, body);

    if (!product) {
      throw new NotFoundException(NOT_FOUND_MESSAGE);
    }

    return product;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productsService.delete(id);

    if (!product) {
      throw new NotFoundException(NOT_FOUND_MESSAGE);
    }

    return product;
  }

  @Post('/delete-all')
  async deleteAllProducts() {
    return await this.productsService.deleteALL();
  }
}

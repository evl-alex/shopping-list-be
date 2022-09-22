import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dtos/products.dto';

export class ProductsService {
  productsRepo: ProductsRepository;

  constructor() {
    // Service is creating its own dependencies - don't do this
    this.productsRepo = new ProductsRepository();
  }

  findOne(id: string) {
    return this.productsRepo.findOne(id);
  }

  findAll() {
    return this.productsRepo.findAll();
  }

  create(content: CreateProductDto) {
    return this.productsRepo.create(content);
  }

  update(id: string, content: CreateProductDto) {
    return this.productsRepo.update(id, content);
  }

  delete(id: string) {
    return this.productsRepo.delete(id);
  }

  deleteALL() {
    return this.productsRepo.deleteAll();
  }
}

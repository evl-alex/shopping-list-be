import { promises as fs } from 'fs';
import { CreateProductDto } from './dtos/products.dto';
import { v1 as uuid } from 'uuid';

export class ProductsRepository {
  async findOne(id: string) {
    const contents = await fs.readFile('products.json', 'utf8');
    const products = JSON.parse(contents);

    return products[id];
  }

  async findAll() {
    const contents = await fs.readFile('products.json', 'utf8');

    return await JSON.parse(contents);
  }

  async create(content: CreateProductDto) {
    const contents = await fs.readFile('products.json', 'utf8');
    const products = JSON.parse(contents);

    const id = uuid();
    const newProduct = { id, ...content };

    products[id] = newProduct;

    await fs.writeFile('products.json', JSON.stringify(products));

    return newProduct;
  }

  async update(id: string, content: CreateProductDto) {
    const contents = await fs.readFile('products.json', 'utf8');
    const products = JSON.parse(contents);

    const productToUpdate = products[id];

    if (!productToUpdate) {
      return null;
    }

    products.id = { id, ...content };
    await fs.writeFile('products.json', JSON.stringify(products));

    return productToUpdate;
  }

  async delete(id: string) {
    const contents = await fs.readFile('products.json', 'utf8');
    const products = JSON.parse(contents);

    const productToDelete = products[id];

    if (!productToDelete) {
      return null;
    }

    delete products[id];
    await fs.writeFile('products.json', JSON.stringify(products));

    return productToDelete;
  }
}

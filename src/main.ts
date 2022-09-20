import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  await app.listen(3001);
}

bootstrap();

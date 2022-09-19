import {
  IsString,
  IsBoolean,
  ValidateNested,
  IsNumber,
  IsDefined,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ValidationPipe } from '@nestjs/common';

class ProductOptions {
  @IsString()
  amount?: string;

  @IsString()
  customOptionsInput?: string;

  @IsString()
  price?: string;

  @IsString()
  weight?: string;
}

class ProductCategory {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  img?: string;

  @IsString()
  label: string;
}

class ProductDetails {
  @ValidateNested()
  @Type(() => ProductOptions)
  options: ProductOptions;

  @ValidateNested()
  @IsDefined()
  @Type(() => ProductCategory)
  category: ProductCategory;
}

export class CreateProductDto extends ValidationPipe {
  @IsBoolean()
  complete?: boolean | null;

  @ValidateNested()
  @IsDefined()
  @Type(() => ProductDetails)
  details: ProductDetails;
}

import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export default class RegisterInvoiceProductsDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  itemOrder: number;

  @IsOptional()
  @IsDateString()
  transactionDate: string;

  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  quantity: number;

  @IsOptional()
  @IsString()
  unit: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  taxClassification: number;
}

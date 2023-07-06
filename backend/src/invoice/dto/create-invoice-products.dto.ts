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
  itemOrder: number;

  @IsOptional()
  @IsDateString()
  transactionDate: Date;

  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  unit: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  taxClassification: number;
}

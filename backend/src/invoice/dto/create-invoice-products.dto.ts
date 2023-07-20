import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export default class RegisterInvoiceProductsDto {
  @IsNotEmpty()
  @IsInt()
  itemOrder: number;

  @IsOptional()
  @IsDateString()
  transactionDate?: Date | null;

  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsOptional()
  @IsNumber()
  quantity?: number | null;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  unit?: string | null;

  @IsOptional()
  @IsNumber()
  price?: number | null;

  @IsNotEmpty()
  @IsNumber()
  taxClassification: number;
}

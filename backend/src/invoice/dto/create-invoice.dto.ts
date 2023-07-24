import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import CreateInvoiceProductsDto from './create-invoice-products.dto';

export default class CreateInvoiceDto {
  @IsOptional()
  @IsDateString()
  documentIssueDate?: Date | null;

  @IsOptional()
  @IsString()
  documentNumber?: string | null;

  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  customerTitle: string;

  @IsNotEmpty()
  @IsString()
  businessDetails: string;

  @IsOptional()
  @IsString()
  @MaxLength(36)
  mSealsId?: string | null;

  @IsOptional()
  @IsString()
  notes?: string | null;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateInvoiceProductsDto)
  invoiceProducts: CreateInvoiceProductsDto[];
}

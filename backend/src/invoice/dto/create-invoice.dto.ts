import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import CreateInvoiceProductsDto from './create-invoice-products.dto';

export default class CreateInvoiceDto {
  @IsNotEmpty()
  @IsDateString()
  documentIssueDate: Date;

  @IsNotEmpty()
  @IsString()
  documentNumber: string;

  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsString()
  businessDetails: string;

  @IsOptional()
  @IsString()
  mSealsId?: string;

  @IsOptional()
  @IsString()
  notes: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateInvoiceProductsDto)
  invoiceProducts: CreateInvoiceProductsDto[];
}

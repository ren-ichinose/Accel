import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { Msg } from 'src/interfaces/main.interfaces';
import { InvoiceService } from './invoice.service';
import CreateInvoiceDto from './dto/create-invoice.dto';
import { InvoiceResponse } from './interfaces/invoice.interface';

@Controller()
@UseGuards(UserAuthGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post('/business/:business_id/invoices')
  async create(
    @Body() dto: CreateInvoiceDto,
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<Msg> {
    const massage = await this.invoiceService.create(dto, user.id, businessId);
    return massage;
  }

  @Get('/invoices/:invoice_id')
  async findById(
    @Param('invoice_id') id: string,
    @Req() { user }: { user: User },
  ): Promise<InvoiceResponse> {
    const invoice = await this.invoiceService.findById(id, user.id);
    return invoice;
  }
}

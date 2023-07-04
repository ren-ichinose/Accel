import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { InvoiceService } from './invoice.service';
import CreateInvoiceDto from './dto/create-invoice.dto';

@Controller()
@UseGuards(UserAuthGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post('/business/:business_id/invoices')
  async create(
    @Body() dto: CreateInvoiceDto,
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ) {
    const massage = await this.invoiceService.create(dto, user.id, businessId);
    return massage;
  }
}

import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Msg } from 'src/interfaces/main.interfaces';
import { Invoice, Prisma } from '@prisma/client';
import CreateInvoiceDto from './dto/create-invoice.dto';
import {
  InvoiceData,
  InvoiceProductData,
  InvoiceResponse,
  // InvoiceResponse,
} from './interfaces/invoice.interface';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: CreateInvoiceDto,
    userId: string,
    businessId: string,
  ): Promise<Msg> {
    const { invoiceProducts, ...invoice } = dto;

    const isMember = await this.checkBusinessMembership(businessId, userId);
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    try {
      const invoiceData = { businessId, ...invoice };
      const { id: invoiceId } = await this.createInvoice(invoiceData);

      const invoiceProductsData = invoiceProducts.map((product) => ({
        invoiceId,
        ...product,
      }));
      await this.createInvoiceProducts(invoiceProductsData);

      return { message: 'ok' };
    } catch (error) {
      throw new Error('請求書の作成ができませんでした');
    }
  }

  async findById(id: string, userId: string): Promise<InvoiceResponse> {
    const findedIvoice = await this.prisma.invoice.findUnique({
      where: { id },
      select: {
        id: true,
        businessId: true,
        documentIssueDate: true,
        documentNumber: true,
        customerName: true,
        businessDetails: true,
        notes: true,
        mSeal: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            selectFlag: true,
          },
        },
        invoiceProducts: {
          select: {
            id: true,
            itemOrder: true,
            transactionDate: true,
            productName: true,
            quantity: true,
            unit: true,
            price: true,
            taxClassification: true,
          },
        },
      },
    });

    if (!findedIvoice)
      throw new BadRequestException('請求書が見つかりませんでした');

    const isMember = await this.checkBusinessMembership(
      findedIvoice.businessId,
      userId,
    );
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    return findedIvoice;
  }

  private async checkBusinessMembership(
    businessId: string,
    userId: string,
  ): Promise<boolean> {
    const businessMenberShips = await this.prisma.businessMembership.findMany({
      where: { businessId },
    });
    return businessMenberShips.some(
      (membership) => membership.userId === userId,
    );
  }

  private createInvoice(invoiceData: InvoiceData): Promise<Invoice> {
    return this.prisma.invoice.create({ data: { ...invoiceData } });
  }

  private createInvoiceProducts(
    invoiceProductsData: InvoiceProductData[],
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invoiceProduct.createMany({
      data: invoiceProductsData,
    });
  }
}

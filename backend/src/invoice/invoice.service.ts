import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Invoice, Prisma } from '@prisma/client';
import { BusinessService } from 'src/business/business.service';
import CreateInvoiceDto from './dto/create-invoice.dto';
import {
  InvoiceData,
  InvoiceProductData,
  InvoiceResponse,
  // InvoiceResponse,
} from './interfaces/invoice.interface';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly businessService: BusinessService,
  ) {}

  async create(
    dto: CreateInvoiceDto,
    userId: string,
    businessId: string,
  ): Promise<InvoiceResponse> {
    const { invoiceProducts, ...invoice } = dto;

    const isMember = await this.businessService.checkBusinessMembership(
      businessId,
      userId,
    );
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    try {
      const invoiceWithoutProductsData = { businessId, ...invoice };
      const { id: invoiceId } = await this.createInvoice(
        invoiceWithoutProductsData,
      );

      const invoiceProductsData = invoiceProducts.map((product) => ({
        invoiceId,
        ...product,
      }));

      await this.createInvoiceProducts(invoiceProductsData);

      const invoiceData = await this.findById(invoiceId, userId);
      return invoiceData;
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
        customerTitle: true,
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

    const isMember = await this.businessService.checkBusinessMembership(
      findedIvoice.businessId,
      userId,
    );
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    return findedIvoice;
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

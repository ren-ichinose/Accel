import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Msg } from 'src/interfaces/main.interfaces';
import { Business } from '@prisma/client';
import RegisterBusinessDto from './dto/register-bussiness.dto';
import { Role } from './enums/business.enum';

@Injectable()
export class BusinessService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterBusinessDto, userId: string): Promise<Msg> {
    const { businessName } = dto;

    const data = { businessName };
    const { id: businessId } = await this.prisma.business.create({ data });

    await this.createBusinessMenbership(businessId, userId);
    return { message: 'ok' };
  }

  async createBusinessMenbership(
    businessId: string,
    userId: string,
  ): Promise<void> {
    const data = { userId, businessId, role: Role.ADMIN };
    await this.prisma.businessMembership.create({ data });
  }

  async getAll(userId: string): Promise<Business[]> {
    const where = { userId };
    const select = { business: true };
    const businesses = await this.prisma.businessMembership.findMany({
      where,
      select,
    });

    return businesses.map((business) => business.business);
  }

  async getById(businessId: string, userId: string): Promise<Business> {
    const where = { userId, businessId };
    const select = { business: true };
    try {
      const business = await this.prisma.businessMembership.findFirst({
        where,
        select,
      });
      return business.business;
    } catch (error) {
      throw new ForbiddenException('事業者IDを確認してください。');
    }
  }
}

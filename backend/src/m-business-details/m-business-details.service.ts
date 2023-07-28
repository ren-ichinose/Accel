import { ForbiddenException, Injectable } from '@nestjs/common';
import { Msg } from 'src/interfaces/main.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { BusinessService } from 'src/business/business.service';
import CreateMBusinessDetailsDto from './dto/create-m-business-details';
import { MBusinessDetailsWithoutTimestamps } from './interfaces/m-business-detail.interface';

@Injectable()
export class MBusinessDetailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly businessService: BusinessService,
  ) {}

  async create(
    dto: CreateMBusinessDetailsDto,
    userId: string,
    businessId: string,
  ): Promise<Msg> {
    const isMember = await this.businessService.checkBusinessMembership(
      businessId,
      userId,
    );
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    try {
      const data = { businessId, ...dto };
      await this.prisma.mBusinessDetail.create({ data });
      return { message: 'ok' };
    } catch (error) {
      throw new Error('事業者情報マスタの登録ができませんでした');
    }
  }

  async getAll(
    userId: string,
    businessId: string,
  ): Promise<MBusinessDetailsWithoutTimestamps[]> {
    const isMember = await this.businessService.checkBusinessMembership(
      businessId,
      userId,
    );
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    const findedMBusinessDetails = await this.prisma.mBusinessDetail.findMany({
      where: { businessId },
      select: {
        id: true,
        businessId: true,
        name: true,
        businessDetail: true,
        selectFlag: true,
      },
    });
    return findedMBusinessDetails;
  }
}

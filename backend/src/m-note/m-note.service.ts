import { ForbiddenException, Injectable } from '@nestjs/common';
import { BusinessService } from 'src/business/business.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Msg } from 'src/interfaces/main.interfaces';
import CreateMNoteDto from './dto/create-m-note';
import { MNoteWithoutTimestamps } from './interfaces/m-note.interface';

@Injectable()
export class MNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly businessService: BusinessService,
  ) {}

  async create(
    dto: CreateMNoteDto,
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
      await this.prisma.mNote.create({ data });
      return { message: 'ok' };
    } catch (error) {
      throw new Error('事業者情報マスタの登録ができませんでした');
    }
  }

  async getAll(
    userId: string,
    businessId: string,
  ): Promise<MNoteWithoutTimestamps[]> {
    const isMember = await this.businessService.checkBusinessMembership(
      businessId,
      userId,
    );
    if (!isMember) throw new ForbiddenException('アクセス権限がありません');

    const findedMNote = await this.prisma.mNote.findMany({
      where: { businessId },
      select: {
        id: true,
        businessId: true,
        name: true,
        note: true,
        selectFlag: true,
      },
    });
    return findedMNote;
  }
}

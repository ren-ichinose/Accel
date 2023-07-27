import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Msg } from 'src/interfaces/main.interfaces';
import { User } from '@prisma/client';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { MBusinessDetailService } from './m-business-detail.service';
import CreateMBusinessDetailDto from './dto/create-m-business-detail';
import { MBusinessDetailWithoutTimestamps } from './interfaces/m-business-detail.interface';

@Controller()
@UseGuards(UserAuthGuard)
export class MBusinessDetailController {
  constructor(
    private readonly mBusinessDetailService: MBusinessDetailService,
  ) {}

  @Post('/business/:business_id/m-business-detail')
  async create(
    @Body() dto: CreateMBusinessDetailDto,
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<Msg> {
    const msg = await this.mBusinessDetailService.create(
      dto,
      user.id,
      businessId,
    );
    return msg;
  }

  @Get('/business/:business_id/m-business-detail')
  async getAll(
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<MBusinessDetailWithoutTimestamps[]> {
    const msg = await this.mBusinessDetailService.getAll(user.id, businessId);
    return msg;
  }
}

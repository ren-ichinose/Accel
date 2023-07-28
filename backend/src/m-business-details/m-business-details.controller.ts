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
import { MBusinessDetailsService } from './m-business-details.service';
import CreateMBusinessDetailsDto from './dto/create-m-business-details';
import { MBusinessDetailsWithoutTimestamps } from './interfaces/m-business-detail.interface';

@Controller()
@UseGuards(UserAuthGuard)
export class MBusinessDetailsController {
  constructor(
    private readonly mBusinessDetailsService: MBusinessDetailsService,
  ) {}

  @Post('/business/:business_id/m-business-details')
  async create(
    @Body() dto: CreateMBusinessDetailsDto,
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<Msg> {
    const msg = await this.mBusinessDetailsService.create(
      dto,
      user.id,
      businessId,
    );
    return msg;
  }

  @Get('/business/:business_id/m-business-details')
  async getAll(
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<MBusinessDetailsWithoutTimestamps[]> {
    const mBusinessDetails = await this.mBusinessDetailsService.getAll(
      user.id,
      businessId,
    );
    return mBusinessDetails;
  }
}

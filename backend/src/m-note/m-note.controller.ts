import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { User } from '@prisma/client';
import { Msg } from 'src/interfaces/main.interfaces';
import { MNoteService } from './m-note.service';
import CreateMNoteDto from './dto/create-m-note';
import { MNoteWithoutTimestamps } from './interfaces/m-note.interface';

@Controller()
@UseGuards(UserAuthGuard)
export class MNoteController {
  constructor(private readonly mNoteService: MNoteService) {}

  @Post('/business/:business_id/m-note')
  async create(
    @Body() dto: CreateMNoteDto,
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<Msg> {
    const msg = await this.mNoteService.create(dto, user.id, businessId);
    return msg;
  }

  @Get('/business/:business_id/m-note')
  async getAll(
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<MNoteWithoutTimestamps[]> {
    const mNotes = await this.mNoteService.getAll(user.id, businessId);
    return mNotes;
  }

  @Delete('/business/:business_id/m-note/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(
    @Param('id') id: string,
    @Param('business_id') businessId: string,
    @Req() { user }: { user: User },
  ): Promise<void> {
    await this.mNoteService.deleteById(user.id, businessId, id);
  }
}

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BusinessModule } from 'src/business/business.module';
import { MNoteController } from './m-note.controller';
import { MNoteService } from './m-note.service';

@Module({
  imports: [PrismaModule, BusinessModule],
  controllers: [MNoteController],
  providers: [MNoteService],
})
export class MNoteModule {}

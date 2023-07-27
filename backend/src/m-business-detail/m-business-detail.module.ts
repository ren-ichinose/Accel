import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MBusinessDetailController } from './m-business-detail.controller';
import { MBusinessDetailService } from './m-business-detail.service';

@Module({
  imports: [PrismaModule, BusinessModule],
  controllers: [MBusinessDetailController],
  providers: [MBusinessDetailService],
})
export class MBusinessDetailModule {}

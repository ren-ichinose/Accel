import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MBusinessDetailsController } from './m-business-details.controller';
import { MBusinessDetailsService } from './m-business-details.service';

@Module({
  imports: [PrismaModule, BusinessModule],
  controllers: [MBusinessDetailsController],
  providers: [MBusinessDetailsService],
})
export class MBusinessDetailsModule {}

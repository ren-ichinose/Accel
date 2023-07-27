import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BusinessModule } from './business/business.module';
import { InvoiceModule } from './invoice/invoice.module';
import { SentryModule } from './sentry/sentry.module';
import { MBusinessDetailModule } from './m-business-detail/m-business-detail.module';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    BusinessModule,
    InvoiceModule,
    SentryModule,
    MBusinessDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}

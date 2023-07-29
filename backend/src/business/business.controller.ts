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
import { Business, User } from '@prisma/client';
import RegisterBusinessDto from './dto/register-bussiness.dto';
import { BusinessService } from './business.service';
import { BusinessWithoutTimestamps } from './interfaces/business.interface';

@UseGuards(UserAuthGuard)
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  async register(
    @Body() dto: RegisterBusinessDto,
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<BusinessWithoutTimestamps> {
    const gotBusiness = await this.businessService.register(dto, user.id);
    return gotBusiness;
  }

  @Get()
  async getAll(
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<Business[]> {
    const businesses = await this.businessService.getAll(user.id);
    return businesses;
  }

  @Get(':businessId')
  async getById(
    @Param('businessId') businessId: string,
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<Business> {
    const business = await this.businessService.getById(businessId, user.id);
    return business;
  }

  @Delete(':businessId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param('businessId') businessId: string,
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<void> {
    await this.businessService.deleteById(businessId, user.id);
  }
}

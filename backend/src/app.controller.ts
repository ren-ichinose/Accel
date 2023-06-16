import { Controller, Get, UseGuards } from '@nestjs/common';
import AppService from './app.service';
import UserAuthGuard from './auth/guards/user.guard';

@UseGuards(UserAuthGuard)
@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

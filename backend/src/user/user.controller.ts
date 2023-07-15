import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { UserWithoutTimestamps } from './interfaces/user.interface';
import { UserService } from './user.service';

@UseGuards(UserAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get(
    @Req() { user }: { user: Omit<UserWithoutTimestamps, 'password'> },
  ): Promise<Omit<UserWithoutTimestamps, 'password'>> {
    return user;
  }
}

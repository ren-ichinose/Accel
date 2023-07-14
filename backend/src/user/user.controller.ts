import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserWithoutTimestamps } from './interfaces/user.interface';
import { UserService } from './user.service';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { User } from 'src/auth/interfaces/auth.interface';

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

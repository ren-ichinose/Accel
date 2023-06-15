import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import AuthDto from './dto/auth.dto';
import { Msg } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(dto: AuthDto): Promise<Msg> {
    await this.userService.createUser(dto);
    return { message: 'ok' };
  }
}

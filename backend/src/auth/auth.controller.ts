import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import AuthDto from './dto/auth.dto';
import { Msg } from './interfaces/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body('user') dto: AuthDto): Promise<Msg> {
    const msg = await this.authService.signUp(dto);
    return msg;
  }
}

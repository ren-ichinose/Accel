import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Response } from 'express';
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

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body('user') dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Msg> {
    const { accessToken } = await this.authService.login(dto);
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
    });
    return { message: 'ok' };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response): Msg {
    res.clearCookie('access_token');
    return { message: 'ok' };
  }
}

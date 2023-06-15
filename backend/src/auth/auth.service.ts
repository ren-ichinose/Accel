import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import AuthDto from './dto/auth.dto';
import { Jwt, Msg } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(dto: AuthDto): Promise<Msg> {
    await this.userService.createUser(dto);
    return { message: 'ok' };
  }

  async login({ loginId, password }: AuthDto): Promise<Jwt> {
    const getedUser = await this.userService.getByloginId(loginId);
    if (!getedUser)
      throw new ForbiddenException(
        'ログインIDまたはパスワードを確認してください',
      );

    const isValid = await bcrypt.compare(password, getedUser.password);
    if (!isValid)
      throw new ForbiddenException(
        'ログインIDまたはパスワードを確認してください',
      );
    const jwt = await this.generateJwt(getedUser.id, getedUser.loginId);
    return jwt;
  }

  private async generateJwt(userid: string, loginId: string): Promise<Jwt> {
    const payload = { sub: userid, loginId };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Payload } from '../interfaces/auth.interface';

@Injectable()
export default class UserJwtStrategy extends PassportStrategy(
  Strategy,
  'user-jwt',
) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          let jwt = null;
          if (req && req.cookies) jwt = req.cookies.access_token;
          return jwt;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(
    payload: Payload,
  ): Promise<{ user: { id: string; loginId: string } }> {
    const user = await this.userService.getByloginId(payload.loginId);
    if (!user) throw new UnauthorizedException('');
    const { password, ...rest } = user;
    return { user: rest };
  }
}

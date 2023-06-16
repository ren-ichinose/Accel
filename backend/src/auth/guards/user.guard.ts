import { AuthGuard } from '@nestjs/passport';

export default class UserAuthGuard extends AuthGuard('user-jwt') {}

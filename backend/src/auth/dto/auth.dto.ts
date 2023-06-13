import { IsString, MinLength } from 'class-validator';

export default class AuthDto {
  @MinLength(4)
  @IsString()
  userId: string;

  @MinLength(8)
  @IsString()
  password: string;
}

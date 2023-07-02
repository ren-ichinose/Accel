import { IsString } from 'class-validator';

export default class RegisterBusinessDto {
  @IsString()
  businessName: string;
}

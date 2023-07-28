import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export default class CreateMBusinessDetailsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(510)
  businessDetail: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(2)
  selectFlag: number;
}

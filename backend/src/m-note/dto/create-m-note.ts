import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export default class CreateMNoteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(510)
  note: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(2)
  selectFlag: number;
}

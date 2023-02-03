import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PetDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  idade: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  description: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
export class UserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  idade: number;

  @ApiProperty()
  nickname: string;
 
  
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsString()
  role: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do Pet',
    example: 'Pitt Bull',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do Pet',
    example: 'Medio porte',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })


  @IsUrl()
  @ApiProperty({
    description: 'Foto do Pet',
    example: ' ',
  })
  image: string;
}
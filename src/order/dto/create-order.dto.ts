import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está fazendo cadastro de adoçao',
    example: 'e1bc0c89-a319-44df-a6e9-db66fe7b956b',
  })
  tableNumber: number;
    userId: any;
}
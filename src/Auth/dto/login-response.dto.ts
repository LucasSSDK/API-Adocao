import { ApiProperty } from '@nestjs/swagger';
import { IUserEntity } from 'src/users/entities/user.entity'; 

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'TOKEN_GERADO_AUTOMATICAMENTE',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuario autenticado',
  })
  User: IUserEntity;
}
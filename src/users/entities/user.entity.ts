import { UserDto } from 'src/users/dto/create-user.dto';
export interface IUserEntity extends UserDto {
  id?: string;
  nickname: string;
  name: string;
  idade: number;
  cpf: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  role: string;
}

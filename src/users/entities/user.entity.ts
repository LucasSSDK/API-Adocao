import { CreateUserDto } from 'src/users/dto/create-user.dto';
export interface IUserEntity extends CreateUserDto {
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

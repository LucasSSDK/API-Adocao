import { PetDto } from '../dto/create-pet.dto';

export interface IPetEntity extends PetDto {
  id: string;
  name: string;
  idade: number;
  image: string;
  password: string;
}

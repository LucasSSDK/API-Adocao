import { PartialType } from '@nestjs/swagger';
import { PetDto } from './create-pet.dto';

export class PartialPetDto extends PartialType(PetDto) {
  id: string;
}

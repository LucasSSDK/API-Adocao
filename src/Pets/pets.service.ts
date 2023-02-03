import { Injectable } from '@nestjs/common';
import { PetDto } from './dto/create-pet.dto';
import { IPetEntity } from './entities/pet.entity';
import { randomUUID } from 'node:crypto';
import { PartialPetDto } from './dto/partialPetInput.dto';
import { PetRepository } from './pets.repository';

@Injectable()
export class PetsService {
  constructor(private readonly PetRepository: PetRepository) {}
  private pets: IPetEntity[] = [];
  updatePet: any;

  async createPet(Pets: PetDto): Promise<IPetEntity> {
    const PetEntity = { ...Pets, id: randomUUID() };
    if (PetEntity.password.length <= 5) {
      throw new Error('Senha invalida');
    }
    const createdPet = await this.PetRepository.createPet(PetEntity);

    return createdPet;
  }

  async getAllPets(): Promise<IPetEntity[]> {
    return await this.PetRepository.findAllPet();
  }

  async getPetById(PetId: string): Promise<IPetEntity> {
    const existePet = this.pets.find((Pet) => Pet.id == PetId);
    const foundedPet = await this.PetRepository.findPetById(PetId);
    return foundedPet;
  }

  async UpdatePetDto(PetData: PartialPetDto): Promise<IPetEntity> {
    const updatedPet = await this.PetRepository.updatePet(PetData);
    return updatedPet;
  }

  async deletePetById(PetId: string): Promise<boolean> {
    try {
      const existePet = this.PetRepository.deletePet(PetId);
      if (!existePet) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

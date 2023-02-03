import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.sevice';
import { PartialPetDto } from './dto/partialPetInput.dto';
import { IPetEntity } from './entities/pet.entity';

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPet(Pet: IPetEntity): Promise<IPetEntity> {
    const CreatedPet = await this.prisma.pet.create({ data: Pet });
    return CreatedPet;
  }

  async updatePet(Pet: PartialPetDto): Promise<IPetEntity> {
    const UpdatedPet = await this.prisma.pet.update({
      where: { id: Pet.id },
      data: Pet,
    });
    return UpdatedPet;
  }

  async deletePet(id: string): Promise<IPetEntity> {
    const deletedPet = await this.prisma.pet.delete({
      where: { id: id },
    });
    return deletedPet;
  }

  async findAllPet(): Promise<IPetEntity[]> {
    const allPets = await this.prisma.pet.findMany();
    return allPets;
  }

  async findPetById(id: string): Promise<IPetEntity> {
    const foundedPet = await this.prisma.pet.findUniqueOrThrow({
      where: { id: id },
    });
    return foundedPet;
  }
}

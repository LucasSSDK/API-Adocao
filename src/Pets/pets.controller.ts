import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetDto } from './dto/create-pet.dto';
import { IHttpResponse } from 'src/utils/httpResponse';
import { IPetEntity } from './entities/pet.entity';
import { PartialPetDto } from './dto/partialPetInput.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(
    @Body() { name, image, idade, password, description }: PetDto,
    @Res() response: Promise<IHttpResponse<IPetEntity | null>>,
  ) {
    try {
      const result = await this.petsService.createPet({
        name,
        image,
        idade,
        password,
        description,
      });
      (await response).body;
    } catch (err) {
      console.log(err);
      return {
        body: null,
        statusCode: 201,
        message: 'Pet adicionado com sucesso',
      };
    }
  }

  @Get()
  async getAllPets(): Promise<IPetEntity[]> {
    return await this.petsService.getAllPets();
  }

  @Get(':id')
  async getPetById(@Param('id') PetId: string): Promise<IPetEntity> {
    try {
      return await this.petsService.getPetById(PetId);
    } catch (err) {
      console.log(err);
    }
  }

  @Patch(':id')
  async updatePet(@Body() PetData: PartialPetDto): Promise<IPetEntity> {
    try {
      return await this.petsService.updatePet(PetData);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  async deletePetById(@Param('id') PetId: string): Promise<string> {
    try {
      const PetIsDeleted = await this.petsService.deletePetById(PetId);
      if (PetIsDeleted) {
        return 'Pet deletado com sucesso';
      } else {
        return 'Pet não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}

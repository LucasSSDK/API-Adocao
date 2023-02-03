import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetRepository } from './pets.repository';
import { PrismaService } from 'src/prisma/prisma.sevice';

@Module({
  controllers: [PetsController],
  providers: [PetsService, PetRepository, PrismaService],
  exports: [PetsService],
})
export class PetsModule {}

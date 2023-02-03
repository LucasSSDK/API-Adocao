import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {PrismaService} from './prisma/prisma.sevice'
import { PetsModule } from './pets/pets.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
    imports: [UsersModule, PetsModule, EmployeesModule, PrismaService],
    controllers: [],
    providers: [PrismaService]
  })

export class AppModule {}

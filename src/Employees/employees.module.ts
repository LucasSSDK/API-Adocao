import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaService } from 'src/prisma/prisma.sevice';
import { EmployeeRepository } from './employees.repository';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository, PrismaService],
  exports: [EmployeesService],
})
export class EmployeesModule {}

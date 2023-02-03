import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { PrismaService } from 'src/prisma/prisma.sevice';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}

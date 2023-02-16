import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { PrismaService } from 'src/prisma/prisma.sevice';

@Module({
  controllers: [UsersController],
  providers: [UserService, UserRepository, PrismaService],
  exports: [UserService]
})
export class UsersModule {}

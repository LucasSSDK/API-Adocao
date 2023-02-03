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
import { UsersService } from './users.service';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './dto/partialUserInput.dto';
import { IHttpResponse } from 'src/utils/httpResponse';
import { response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  async creatUser(
    @Body() { cpf, email, idade, name, password, role }: UserDto,
    @Res() response: Promise<IHttpResponse<IUserEntity | null>>,
  ) {
    try {
      const result = await this.service.createUser({
        cpf,
        name,
        idade,
        email,
        password,
        role,
      });
      (await response).body;
    } catch (err) {
      console.log(err);
      return { body: null, statusCode: 201, message: 'Criado com sucesso' };
    }
  }

  @Patch()
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      console.log(err);
    }
  }

  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') UserId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(UserId);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id') UserId: string): Promise<string> {
    try {
      const userIsDeleted = await this.service.deleteUserById(UserId);
      if (userIsDeleted) {
        return 'Usuario deletado com sucesso';
      } else {
        return 'Usuario não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}

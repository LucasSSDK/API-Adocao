import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { IUserEntity } from './entities/user.entity';
import { UsersModule } from './users.module';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './dto/partialUserInput.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  private users: IUserEntity[] = [];
  updateUser: any;

  async createUser(users: UserDto): Promise<IUserEntity> {
    const userEntity = { ...users, id: randomUUID() };
    if (userEntity.password.length <= 5) {
      throw new Error('Senha invalida');
    }
    const createdUser = await this.userRepository.createUser(userEntity);

    return createdUser;
  }

  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.userRepository.findAllUser();
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    const existeUser = this.users.find((user) => user.id == userId);
    const foundedUser = await this.userRepository.findUserById(userId);
    return foundedUser;
  }

  async UpdateUserDto(userData: PartialUserDto): Promise<IUserEntity> {
    const updatedUser = await this.userRepository.updateUser(userData);
    return updatedUser;
  }

  async deleteUserById(userId: string): Promise<boolean> {
    try {
      const existeUser = this.userRepository.deleteUser(userId);
      if (!existeUser) {
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

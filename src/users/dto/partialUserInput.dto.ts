import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './create-user.dto';

export class PartialUserDto extends PartialType(UserDto) {
  id: string;
}

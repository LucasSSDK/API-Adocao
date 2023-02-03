import { PartialType } from '@nestjs/swagger';
import { EmployeeDto } from './create-employee.dto';

export class PartialEmployeeDto extends PartialType(EmployeeDto) {
  id: string;
}

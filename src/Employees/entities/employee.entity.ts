import { EmployeeDto } from '../dto/create-employee.dto';

export interface IEmployeeEntity extends EmployeeDto {
  id: string;
  name: string;
  idade: number;
  cpf: string;
  email: string;
  password: string;
  role: string;
}

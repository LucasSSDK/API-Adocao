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
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './dto/create-employee.dto';
import { IHttpResponse } from 'src/utils/httpResponse';
import { IEmployeeEntity } from './entities/employee.entity';
import { PartialEmployeeDto } from './dto/partialEmployeeInput.dto';

@Controller('Employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}

  @Post()
  async creatEmployee(
    @Body() { cpf, email, idade, name, password, role }: EmployeeDto,
    @Res() response: Promise<IHttpResponse<IEmployeeEntity | null>>,
  ) {
    try {
      const result = await this.service.createEmployee({
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
      return {
        body: null,
        statusCode: 201,
        message: 'Funcionario cadastrado com sucesso',
      };
    }
  }

  @Patch()
  async updateEmployee(
    @Body() EmployeeData: PartialEmployeeDto,
  ): Promise<IEmployeeEntity> {
    try {
      return await this.service.updateEmployee(EmployeeData);
    } catch (err) {
      console.log(err);
    }
  }

  @Get()
  async getAllEmployees(): Promise<IEmployeeEntity[]> {
    return await this.service.getAllEmployees();
  }

  @Get(':id')
  async getEmployeeById(
    @Param('id') EmployeeId: string,
  ): Promise<IEmployeeEntity> {
    try {
      return await this.service.getEmployeeById(EmployeeId);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  async deleteEmployeeById(@Param('id') EmployeeId: string): Promise<string> {
    try {
      const EmployeeIsDeleted = await this.service.deleteEmployeeById(
        EmployeeId,
      );
      if (EmployeeIsDeleted) {
        return 'Funcionario deletado com sucesso';
      } else {
        return 'Funcionario não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}

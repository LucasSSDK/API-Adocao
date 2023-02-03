import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EmployeeDto } from './dto/create-employee.dto';
import { PartialEmployeeDto } from './dto/partialEmployeeInput.dto';
import { IEmployeeEntity } from './entities/employee.entity';
import { EmployeeRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly EmployeeRepository: EmployeeRepository) {}
  private Employees: IEmployeeEntity[] = [];
  updateEmployee: any;

  async createEmployee(Employees: EmployeeDto): Promise<IEmployeeEntity> {
    const EmployeeEntity = { ...Employees, id: randomUUID() };
    if (EmployeeEntity.password.length <= 5) {
      throw new Error('Senha invalida');
    }
    const createdEmployee = await this.EmployeeRepository.createEmployee(
      EmployeeEntity,
    );

    return createdEmployee;
  }

  async getAllEmployees(): Promise<IEmployeeEntity[]> {
    return await this.EmployeeRepository.findAllEmployee();
  }

  async getEmployeeById(EmployeeId: string): Promise<IEmployeeEntity> {
    const existeEmployee = this.Employees.find(
      (Employee) => Employee.id == EmployeeId,
    );
    const foundedEmployee = await this.EmployeeRepository.findEmployeeById(
      EmployeeId,
    );
    return foundedEmployee;
  }

  async UpdateEmployeeDto(
    EmployeeData: PartialEmployeeDto,
  ): Promise<IEmployeeEntity> {
    const updatedEmployee = await this.EmployeeRepository.updateEmployee(
      EmployeeData,
    );
    return updatedEmployee;
  }

  async deleteEmployeeById(EmployeeId: string): Promise<boolean> {
    try {
      const existeEmployee = this.EmployeeRepository.deleteEmployee(EmployeeId);
      if (!existeEmployee) {
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

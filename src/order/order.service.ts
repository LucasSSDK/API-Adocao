import {
    ForbiddenException,
    Injectable,
    NotFoundException,
    UnprocessableEntityException,
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma/prisma.sevice'; 
  import { ChangeItemOrderDto } from './dto/change-item-order.dto';
  import { CreateOrderDto } from './dto/create-order.dto';
  import { Order } from './entites/order.etity'; 
  import { Status } from './entites/status.entity'; 
  
  @Injectable()
  export class OrderService {
    constructor(private prismaService: PrismaService) {}
  
    async create(createOrderDto: CreateOrderDto): Promise<Order> {
      const userIdExists = await this.prismaService.user.findUnique({
        where: { id: createOrderDto.userId },
        include: { orders: true },
      });
  
  
      return this.prismaService.order.create({
               user: {
            connect: {
              id: userIdExists.id,
            },
          },
      });
    }
  
    async findAll() {
      const orderList = await this.prismaService.order.findMany({
        include: {
          user: true,
          products: true,
          table: true,
        },
      });
  
      if (orderList.length === 0) {
        throw new NotFoundException('Não há pedidos cadastrados');
      }
  
      return orderList;
    }
  
    async findOne(id: string) {
      const orderExists = await this.prismaService.order.findUnique({
        where: { id },
        include: {
          user: true,
          table: true,
          products: true,
        },
      });
  
      if (!orderExists) {
        throw new NotFoundException(`Pedido ${id} não encontrado`);
      }
  
      return orderExists;
    }
  
    private async canOrderBeProcessed(changeItemOrderDto: ChangeItemOrderDto) {
      const orderExists = await this.prismaService.order.findUnique({
        where: { id: changeItemOrderDto.orderId },
        include: {
          user: true,
          table: true,
          products: true,
        },
      });
  
      if (!orderExists) {
        throw new NotFoundException(
          `Pedido ${changeItemOrderDto.orderId} não encontrado`,
        );
      }
  
      if (changeItemOrderDto.productsId.length === 0) {
        throw new UnprocessableEntityException('Não há itens disponíveis.');
      }
  
      if (orderExists.status === Status.CLOSED) {
        throw new ForbiddenException('Pedido está fechado');
      }
    }
  
    async addItem(changeItemOrderDto: ChangeItemOrderDto) {
      await this.canOrderBeProcessed(changeItemOrderDto);
  
      const updatedOrder = await this.prismaService.order.update({
        where: { id: changeItemOrderDto.orderId },
        data: {
          products: {
            connect: changeItemOrderDto.productsId.map((item) => ({
              id: item,
            })),
          },
        },
        include: {
          products: true,
        },
      });
  
      let orderTotal = 0;
  
      updatedOrder.products.map((item) => {
        orderTotal += item.price;
      });
  
      return { updatedOrder, orderTotal };
    }
  
    async removeItem(changeItemOrderDto: ChangeItemOrderDto) {
      await this.canOrderBeProcessed(changeItemOrderDto);
  
      const updatedOrder = await this.prismaService.order.update({
        where: { id: changeItemOrderDto.orderId },
        data: {
          products: {
            disconnect: changeItemOrderDto.productsId.map((item) => ({
              id: item,
            })),
          },
        },
        include: {
          products: true,
        },
      });
  
      let orderTotal = 0;
  
      updatedOrder.products.map((item) => {
        orderTotal += item.price;
      });
  
      return { updatedOrder, orderTotal };
    }
  
    async closeOrder(id: string) {
      const orderExists = await this.prismaService.order.findUnique({
        where: { id },
        include: {
          user: true,
          table: true,
          products: true,
        },
      });
  
      if (!orderExists) {
        throw new NotFoundException(`Pedido ${id} não encontrado`);
      }
  
      const updatedOrder = await this.prismaService.order.update({
        where: { id },
        data: {
          status: 'CLOSED',
        },
        include: {
          user: true,
          table: true,
          products: true,
        },
      });
  
      let orderTotal = 0;
  
      updatedOrder.products.map((item) => {
        orderTotal += item.price;
      });
  
      return { updatedOrder, orderTotal };
    }
  }
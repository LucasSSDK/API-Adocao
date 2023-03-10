import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
  import { ChangeItemOrderDto } from './dto/change-item-order.dto';
  import { CreateOrderDto } from './dto/create-order.dto';
  import { Order } from './entites/order.etity';  
  import { OrderService } from './order.service';
  
  @ApiTags('order')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Controller('order')
  export class OrderController {
    constructor(private readonly orderService: OrderService) {}
  
    @Post()
    @ApiOperation({
      summary: 'Criar um pedido',
    })
    create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
      return this.orderService.create(createOrderDto);
    }
  
    @Get()
    @ApiOperation({
      summary: 'Listar de favoritos',
    })
    findAll() {
      return this.orderService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({
      summary: 'Listar favoritos pelo ID',
    })
    findOne(@Param('id') id: string) {
      return this.orderService.findOne(id);
    }
  
    @Patch('add-item')
    @ApiOperation({
      summary: 'Adicionar aos favoritos',
    })
    addItem(@Body() changeItemOrderDto: ChangeItemOrderDto) {
      return this.orderService.addItem(changeItemOrderDto);
    }
  
    @Patch('remove-item')
    @ApiOperation({
      summary: 'Remover um ou mais dos favoritos',
    })
    removeItem(@Body() changeItemOrderDto: ChangeItemOrderDto) {
      return this.orderService.removeItem(changeItemOrderDto);
    }
  
    @Patch('close-order/:id')
    @ApiOperation({
      summary: 'Fechar adoção',
    })
    closeOrder(@Param('id') id: string) {
      return this.orderService.closeOrder(id);
    }
  }
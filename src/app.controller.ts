import { Controller, Get } from '@nestjs/common';
import { EventBus, QueryBus } from '@nestjs/cqrs';
import * as uuid from 'uuid';
import { OrderEvent } from './order/order.events';

@Controller()
export class AppController {
  constructor(
    private readonly eventBus: EventBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async bid(): Promise<object> {
    const orderTransactionGUID = uuid.v4();
    this.eventBus.publish(
      new OrderEvent(
        orderTransactionGUID,
        'Ismaias Moreira',
        'Samsung Galaxy S',
        5000,
      ),
    );
    return { status: 'PENDING' };
  }
}

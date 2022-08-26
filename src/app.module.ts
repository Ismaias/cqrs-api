import { ItemRepository } from './item/item.repository';
import { OrderSaga } from './order/order.saga';
import { OrderHandler } from './order/order.handler';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [OrderHandler, OrderSaga, ItemRepository],
})
export class AppModule {}

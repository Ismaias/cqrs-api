import { OrderEventFail, OrderEventSuccess } from './../order/order.events';
import { AggregateRoot } from '@nestjs/cqrs';
import { IItemInterface } from './item.interface';

export class ItemModel extends AggregateRoot {
  constructor(private readonly item: IItemInterface) {
    super();
  }

  orderOnItem(orderTransactionGUID: string, userID: string, amount: number) {
    try {
      this.apply(
        new OrderEventSuccess(orderTransactionGUID, this.item.id, amount, {
          email: 'fake@email.com',
          id: userID,
        }),
      );
    } catch (e) {
      this.apply(new OrderEventFail(orderTransactionGUID, e));
    }
  }
}

import { OrderCommand } from './order.command';
import { OrderEvent, OrderEventSuccess } from './order.events';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { mergeMap, map, Observable } from 'rxjs';

@Injectable()
export class OrderSaga {
  @Saga()
  createOrder = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(OrderEvent),
      map((event: OrderEvent) => {
        return new OrderCommand(
          event.orderTransactionGUID,
          event.orderUser,
          event.orderItem,
          event.orderAmount,
        );
      }),
    );
  };

  @Saga()
  createOrderSuccess = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(OrderEventSuccess),
      mergeMap((event: OrderEventSuccess) => {
        console.log('Order Placed!', event.orderItem);
        return [];
      }),
    );
  };
}

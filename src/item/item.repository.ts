import { ItemModel } from './item.model';
import { IItemInterface } from './item.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemRepository {
  async getItemById(id: string) {
    const item: IItemInterface = {
      id,
      amount: 5000,
    };
    return new ItemModel(item);
  }

  async getAll() {
    return [];
  }
}

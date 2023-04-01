import { Order } from '@ab/types';
import { OrderPricesService } from './OrderPriceServices';

export class OrderServices {
  public data: Order;

  constructor(order: Order) {
    this.data = order;
  }

  get orderId(): number {
    return this.data.id;
  }

  get tokenValue(): string {
    return this.data.tokenValue;
  }

  get prices(): OrderPricesService {
    return new OrderPricesService(this.data);
  }
}

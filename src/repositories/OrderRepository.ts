import { Order } from '@ab/types';
import {
  IOrderRepository,
  OrderRepositoryConfig,
} from './interfaces/OrderRepository';
import { Repository } from '.';
import { OrderServices } from '../services/OrderServices';
import { AxiosHeaders } from 'axios';

export class OrderRepository
  extends Repository<Order>
  implements IOrderRepository
{
  constructor({ baseUrl }: OrderRepositoryConfig) {
    super({ baseUrl });
  }

  private setHeaders = (authorization?: string): AxiosHeaders => {
    const header = new AxiosHeaders();
    header.setAccept('application/json');
    header.setContentType('application/json');
    if (authorization) {
      header.setAuthorization(authorization);
    }
    return header;
  };

  public async findByToken(
    token: string,
    authorization?: string
  ): Promise<OrderServices> {
    const order = await this.findOne(`orders/${token}`, {
      headers: this.setHeaders(authorization).toJSON(),
    });
    return new OrderServices(order);
  }
}

import { RepositoryConfig } from '.';
import { OrderServices } from '../../services/OrderServices';

export interface OrderRepositoryConfig extends RepositoryConfig {}

export interface IOrderRepository {
  findByToken(token: string): Promise<OrderServices>;
}

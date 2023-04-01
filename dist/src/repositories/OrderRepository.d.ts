import { Order } from '@ab/types';
import { IOrderRepository, OrderRepositoryConfig } from './interfaces/OrderRepository';
import { Repository } from '.';
import { OrderServices } from '../services/OrderServices';
export declare class OrderRepository extends Repository<Order> implements IOrderRepository {
    constructor({ baseUrl }: OrderRepositoryConfig);
    private setHeaders;
    findByToken(token: string, authorization?: string): Promise<OrderServices>;
}

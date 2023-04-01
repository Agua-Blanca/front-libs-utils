import { Order } from '@ab/types';
import { OrderPricesService } from './OrderPriceServices';
export declare class OrderServices {
    data: Order;
    constructor(order: Order);
    get orderId(): number;
    get tokenValue(): string;
    get prices(): OrderPricesService;
}

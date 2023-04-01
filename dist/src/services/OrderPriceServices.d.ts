import { Order } from '@ab/types';
import { PriceServices } from './PriceServices';
import { OrderPricesRules } from '../rules/OrderPricesRules';
export declare class OrderPricesService {
    private order;
    rules: OrderPricesRules;
    constructor(order: Order);
    get total(): PriceServices;
    get taxTotal(): PriceServices;
    get shippingTotal(): PriceServices;
    get orderPromotionTotal(): PriceServices;
    get itemsTotal(): PriceServices;
}

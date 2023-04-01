import { OrderPricesService } from '../services/OrderPriceServices';
export declare class OrderPricesRules {
    private orderPriceService;
    constructor(orderPriceService: OrderPricesService);
    /**
     * @description Check if the order has free shipping
     * @returns {boolean}
     * @businessRule If the shipping total is 0, then the order has free shipping
     */
    get haveFreeShipping(): boolean;
}

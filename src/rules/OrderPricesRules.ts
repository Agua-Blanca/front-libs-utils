import { Order } from '@ab/types';
import { OrderPricesService } from '../services/OrderPriceServices';

export class OrderPricesRules {
  private orderPriceService: OrderPricesService;

  constructor(orderPriceService: OrderPricesService) {
    this.orderPriceService = orderPriceService;
  }

  /**
   * @description Check if the order has free shipping
   * @returns {boolean}
   * @businessRule If the shipping total is 0, then the order has free shipping
   */
  get haveFreeShipping(): boolean {
    return this.orderPriceService.shippingTotal.price === 0;
  }
}

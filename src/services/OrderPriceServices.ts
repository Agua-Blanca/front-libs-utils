import { Order } from '@ab/types';
import { PriceServices } from './PriceServices';
import { OrderPricesRules } from '../rules/OrderPricesRules';

export class OrderPricesService {
  private order: Order;
  public rules: OrderPricesRules;

  constructor(order: Order) {
    this.order = order;
    this.rules = new OrderPricesRules(this);
  }

  get total() {
    return new PriceServices(this.order.total);
  }

  get taxTotal() {
    return new PriceServices(this.order.taxTotal);
  }

  get shippingTotal() {
    return new PriceServices(this.order.shippingTotal);
  }

  get orderPromotionTotal() {
    return new PriceServices(this.order.orderPromotionTotal);
  }

  get itemsTotal() {
    return new PriceServices(this.order.itemsTotal);
  }
}

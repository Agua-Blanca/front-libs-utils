"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPricesRules = void 0;
var OrderPricesRules = /** @class */ (function () {
    function OrderPricesRules(orderPriceService) {
        this.orderPriceService = orderPriceService;
    }
    Object.defineProperty(OrderPricesRules.prototype, "haveFreeShipping", {
        /**
         * @description Check if the order has free shipping
         * @returns {boolean}
         * @businessRule If the shipping total is 0, then the order has free shipping
         */
        get: function () {
            return this.orderPriceService.shippingTotal.price === 0;
        },
        enumerable: false,
        configurable: true
    });
    return OrderPricesRules;
}());
exports.OrderPricesRules = OrderPricesRules;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPricesService = void 0;
var PriceServices_1 = require("./PriceServices");
var OrderPricesRules_1 = require("../rules/OrderPricesRules");
var OrderPricesService = /** @class */ (function () {
    function OrderPricesService(order) {
        this.order = order;
        this.rules = new OrderPricesRules_1.OrderPricesRules(this);
    }
    Object.defineProperty(OrderPricesService.prototype, "total", {
        get: function () {
            return new PriceServices_1.PriceServices(this.order.total);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderPricesService.prototype, "taxTotal", {
        get: function () {
            return new PriceServices_1.PriceServices(this.order.taxTotal);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderPricesService.prototype, "shippingTotal", {
        get: function () {
            return new PriceServices_1.PriceServices(this.order.shippingTotal);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderPricesService.prototype, "orderPromotionTotal", {
        get: function () {
            return new PriceServices_1.PriceServices(this.order.orderPromotionTotal);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderPricesService.prototype, "itemsTotal", {
        get: function () {
            return new PriceServices_1.PriceServices(this.order.itemsTotal);
        },
        enumerable: false,
        configurable: true
    });
    return OrderPricesService;
}());
exports.OrderPricesService = OrderPricesService;

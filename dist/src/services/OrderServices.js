"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
var OrderPriceServices_1 = require("./OrderPriceServices");
var OrderServices = /** @class */ (function () {
    function OrderServices(order) {
        this.data = order;
    }
    Object.defineProperty(OrderServices.prototype, "orderId", {
        get: function () {
            return this.data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderServices.prototype, "tokenValue", {
        get: function () {
            return this.data.tokenValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderServices.prototype, "prices", {
        get: function () {
            return new OrderPriceServices_1.OrderPricesService(this.data);
        },
        enumerable: false,
        configurable: true
    });
    return OrderServices;
}());
exports.OrderServices = OrderServices;

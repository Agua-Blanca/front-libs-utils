"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceServices = void 0;
var PriceServices = /** @class */ (function () {
    function PriceServices(price) {
        this.data = price;
    }
    Object.defineProperty(PriceServices.prototype, "price", {
        get: function () {
            return this.data / 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriceServices.prototype, "stringifyPrice", {
        get: function () {
            return this.price.toFixed(2);
        },
        enumerable: false,
        configurable: true
    });
    PriceServices.prototype.stringifyPriceWithCurrency = function (currency) {
        if (currency === void 0) { currency = '€'; }
        return "".concat(this.stringifyPrice, " ").concat(currency);
    };
    return PriceServices;
}());
exports.PriceServices = PriceServices;

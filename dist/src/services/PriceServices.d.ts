export declare class PriceServices {
    private data;
    constructor(price: number);
    get price(): number;
    get stringifyPrice(): string;
    stringifyPriceWithCurrency(currency?: string): string;
}

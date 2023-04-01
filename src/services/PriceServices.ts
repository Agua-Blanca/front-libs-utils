export class PriceServices {
  private data: number;

  constructor(price: number) {
    this.data = price;
  }

  get price(): number {
    return this.data / 100;
  }

  get stringifyPrice(): string {
    return this.price.toFixed(2);
  }

  public stringifyPriceWithCurrency(currency = '€'): string {
    return `${this.stringifyPrice} ${currency}`;
  }
}

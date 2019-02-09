class Product {
  constructor(
    private _name: string,
    private _quantity: number,
    private _id?: number
  ) {}

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get quantity() {
    return this._quantity;
  }
}

export default Product;

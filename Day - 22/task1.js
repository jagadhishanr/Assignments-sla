class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discountedPrice(discountPercent) {
    const discount = this.price * (discountPercent / 100);
    return this.price - discount;
  }
}
const product1 = new Product("Laptop", 1000);
console.log(product1.discountedPrice(10));

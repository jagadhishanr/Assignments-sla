class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
const circle1 = new Circle(5);
console.log(`${circle1.name} area:`, circle1.area().toFixed(2));

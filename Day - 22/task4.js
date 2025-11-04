class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    console.log("Area formula not defined for generic shape.");
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
const myCircle = new Circle(4);
console.log(`${myCircle.name} area: ${myCircle.area().toFixed(2)}`);

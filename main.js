// Define a class called Shape
class Shape {
  constructor(name, sides, sideLength) {
    // Initialize the properties with the given values
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    // The perimeter is the product of the number of sides and the length of each side
    let perimeter = this.sides * this.sideLength;
    console.log(`The perimeter of this ${this.name} is ${perimeter}`);
  }
}

// Create a new instance of the Shape class called square
let square = new Shape("square", 4, 5);

square.calcPerimeter();

// Create a new instance of the Shape class called triangle
let triangle = new Shape("triangle", 3, 3);

triangle.calcPerimeter();

// Define a derived class called Square that inherits from the Shape class
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  // Add a calcArea method that calculates the square's area
  calcArea() {
    let area = this.sideLength ** 2;
    console.log(`The area of this ${this.name} is ${area}`);
  }
}
 square = new Square(5);

square.calcPerimeter();
square.calcArea();

// Define a class called Triple
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

// Define a subclass called SquaredTriple that inherits from the Triple class
class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";

  static calculate(n = 1) {
    return super.calculate(n) ** 2;
  }
}

// Test the code 
console.log(Triple.description);
console.log(Triple.calculate()); 
console.log(Triple.calculate(6)); 

console.log(SquaredTriple.calculate(3)); 
console.log(SquaredTriple.description); 
console.log(SquaredTriple.longDescription); 
console.log(SquaredTriple.customName); 

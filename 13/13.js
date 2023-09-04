// Задача на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра. Затем создайте подклассы,
// представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

// ==================================================

// тк не определил общих свойств или методов, которые
// могут наследоваться или переопределяться подклассами
// создал методы для вывода информации, которые принимают значение и выводят свойства подкласса
class Shape {
  _getSquare = (square) => {
    console.log(`the area of the ${this.name} shape is equal to: ${square}`)
  }

  _getPerimeter = (perimeter) => {
    console.log(`the perimeter of the ${this.name} shape is equal to: ${perimeter}`)
  }
}

class Rectangle extends Shape {
  name = 'Rectangle';

  // площадь прямоугольника: S = a * a
  calculateSquare = (sideA, sideB) => {
    this._getSquare((sideA * sideB));
  }

  // периметр прямоугольника: P = 2* (a + b)
  calculatePerimeter = (sideA, sideB) => {
    this._getPerimeter((2 * (sideA + sideB)));
  }
}

class Circle extends Shape {
  name = 'Circle';

  // площадь круга: S = π * (r * r)
  calculateSquare = (radius) => {
    this._getSquare(Math.round(Math.PI * radius ** 2));
  }

  // периметр круга: P = 2 * π * r
  calculatePerimeter = (radius) => {
    this._getPerimeter(Math.round(2 * Math.PI * radius));
  }
}

class Triangle extends Shape {
  name = 'Triangle';

  calculateSquare = (sideA, sideB, sideC) => {
    // полупериметр треугольника
    const S = (sideA + sideB + sideC) / 2;
    this._getSquare(Math.sqrt(S * (S - sideA) * (S - sideB) * (S - sideC)));
  }

  // периметр треугольника: P = a + b + c
  calculatePerimeter = (sideA, sideB, sideC) => {
    this._getPerimeter(sideA + sideB + sideC);
  }
}

const rectangle = new Rectangle();
const circle = new Circle();
const triangle = new Triangle();

rectangle.calculateSquare(3, 4); // the area of the Rectangle shape is equal to: 12
rectangle.calculatePerimeter(4, 9); // the area of the Rectangle shape is equal to: 26

circle.calculateSquare(8); // the area of the Circle shape is equal to: 201
circle.calculatePerimeter(12); // the perimeter of the Circle shape is equal to: 75

triangle.calculateSquare(6, 8, 10) // the area of the Triangle shape is equal to: 12
triangle.calculatePerimeter(6, 8, 10) // the perimeter of the Triangle shape is equal to: 24

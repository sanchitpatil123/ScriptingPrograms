class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return 2 * (this.length + this.width);
    }
}
let rect = new Rectangle(10, 5);
console.log("Length:", rect.length);
console.log("Width:", rect.width);
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());

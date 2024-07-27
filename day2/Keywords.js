var numb;
numb = 56;
var valarian = numb.toString();
console.log('The value of valarian is:', valarian);
var naam = 'vardhan';
var val = naam;
console.log('The string value is :', val);
function getArea(shape) {
    if (shape.kind === "circle") {
        // We know it's a Circle interface here
        return Math.PI * Math.pow(shape.radiuss, 2);
    }
    else {
        // We know it's a Square interface here
        return Math.pow(shape.sideLength, 2);
    }
}
var circle = { kind: "circle", radiuss: 7 };
var square = { kind: "square", sideLength: 8 };
console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(square)); // Output: 16
function sayHello(input) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase()); // It's now safe to use string methods
    }
}
sayHello("Hello World");

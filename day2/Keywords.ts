
let numb:unknown;

numb=56
let valarian=(numb as string).toLowerCase();

console.log('The value of valarian is:',valarian)

let naam:any='vardhan';
let val:number=(naam as number);
console.log('The string value is :',val);





// alternative methods 
interface Circle {
    kind: "circle";
    radiuss: number;
  
  }
  
  interface Square {
    kind: "square";
    sideLength: number;
  }
  
  type Shape = Circle | Square;
  
  function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
      // We know it's a Circle interface here
      return Math.PI * shape.radiuss ** 2;
    } else{
      // We know it's a Square interface here
    return shape.sideLength ** 2; 
  
    }
  
    
  }
  
  const circle: Shape = { kind: "circle", radiuss: 7};
  const square: Shape = { kind: "square", sideLength: 8 };
  
  console.log(getArea(circle)); // Output: 78.53981633974483
  console.log(getArea(square)); // Output: 16

// using unknown type

  function sayHello(input: unknown) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase()); // It's now safe to use string methods
    }
}

sayHello("Hello World");

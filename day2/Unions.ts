interface Circle {
  kind: "circle";
  radius?: number;

}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    // We know it's a Circle interface here
    return Math.PI * shape.radius ** 2;
  } else{
    // We know it's a Square interface here
  return shape.sideLength ** 2; 

  }

  
}

const circle: Shape = { kind: "circle" /*radius: 5*/ };
const square: Shape = { kind: "square", sideLength: 4 };

console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(square)); // Output: 16


// Union Types

let data:number|string|boolean

data="vardhan";
data=234;
data=false;

// uniontypes in objects

type person={
    name:string;
    age:number;
    height:number;
}

type status={
    jobStatus:boolean;
    maritalStatus:boolean
}

let persondetails:person|status ={name:"Vardhan", age:25, height:5.6, jobStatus:true, maritalStatus:false}

//persondetails={jobStatus:true, maritalStatus:false}

console.log(persondetails)

// Using functions


let names:string;

names="Vardhan";
names.toUpperCase();

function getdetails(information: string| number| boolean){

//information.toUpperCase();

if (typeof information === "string"){
  console.log(information.toUpperCase());
}
else {
  console.log("It is number");
}



}

getdetails("simhadri");
//getdetails(24);
//getdetails(true);



function getDetailsofme(informations:number|string|boolean){
if (typeof informations === "string"){
   console.log( informations.toLocaleUpperCase());
}else if(informations === 40){
 console.log(informations.toString());
}
else{
    console.log("It is a boolean value")
}

}
// here in the function we can provide any one value at a time.
//getDetailsofme(22);
getDetailsofme("Vardhan");
//getDetailsofme(false);

let array1:(number| string| boolean)[]=["Vardhan", "Simhadri", 1, 2, 3 , false];

console.log(array1);




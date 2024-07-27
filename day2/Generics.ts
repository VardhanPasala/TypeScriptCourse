

function functionone<details>(value:details):details{
return value;
}

let valueone=functionone<string>(2);
let stringvalue=functionone("Vardhan").length
let booleanValue=functionone(false)
console.log("My name is:", stringvalue)
console.log("The value is :", valueone);
console.log('The boolean value is:', booleanValue)

//generics using arrow functions
const detail=<T> (productions: T):T=>
{
return productions;
}

// Mlyiple type generics
function displayDataType<T, U>(id:T, name:U): void {   
    	  console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
    	}  
    	const prnt =displayDataType<number, string>(101, "Abhishek");  
        console.log(prnt);

        // print non generic also
        function displayDataType<T>(id:T, name:string): void {   
            console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
          }  
          displayDataType<number>(1, "Abhishek");  
    
// need of Generics in  arrays 

function getItems<T>(items : T[] ) : T[] {  
    return items //new Array<T>().concat(items);  
}  
let arrNumber = getItems/*<number>*/([10, 20, 30]);  
let arrString = getItems/*<string>*/(["Hello", "JavaTpoint"]);  
arrNumber.push(40); // Correct  
//arrNumber.push("Hi! Javatpoint"); // Compilation Error  
arrString.push("Hello TypeScript"); // Correct  
//arrString.push(50); // Compilation Error  
console.log(arrNumber);  
console.log(arrString);  

//generics of classes 
class StudentInfo<T,U>  
{   
     Id: T;  
    Name: U;  
    setValue(id: T, name: U): void {   
        this.Id = id;  
        this.Name = name;  
    }  
    display():void {   
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);  
    }  
}  
let st = new StudentInfo<number, string>();  
st.setValue(101, "Virat");  
st.display();  
let std = new StudentInfo<string, string>();  
std.setValue("201", "Rohit");  
std.display();  

// generics in Interfaces

interface People {  
    name: string  
    age: number  
}  
interface Celebrity extends People {  
    profession: string  
}  
function printName<T extends Celebrity>(theInput: T): void {  
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);  
}  
let player: Celebrity = {  
    name: 'Rohit Sharma', age: 30, profession: 'Cricket Player'  
}  
printName(player);  






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
  
  
  // Union type for functions
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
  
  
  
  
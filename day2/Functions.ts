
//for number type
function addnum(num1:number, num2:number, num3:number){
return num3=num1+num2;
}
console.log(addnum(45,56, 0));

//for string type

function logindetails(name:string, Email: string, password: string){
    return`${name}, ${Email}, ${password}`
}

let loginUser =(name:string, phoneNum:number)=>{
return `${name}, ${phoneNum}`

}

console.log(loginUser('Vardhan', 939107))

//logindetails("vardhan","vardhan@gmail.com","VardhanVardhan");

console.log(logindetails("vardhan","vardhan@gmail.com","VardhanVardhan"));
// Using arrow functions
let loginUse = (name:string, isPail:boolean)=>{
    return `${name}, ${isPail}`
};

console.log("The login credentials are"+loginUse("Vardhan", false));

// functions using loops 

let array1=[1,2,3,4,5,6,7,8,9,10];

array1.forEach((add)=>{
console.log( add*2);
});

let numlist:number[]
numlist=[1,2,3,4,5,6,7,8,9,10]
numlist.forEach((multiply)=>{

    console.log(multiply*2)
})

interface person1{
    name:string;
    age:number;
}

interface person2{
    name:string;
    age:number;
    gender: "Male"| "Female";

    agedouble: number
}

function agedooubler({name, age}:person1):person2{
    return agedooubler:age*2;
}



let datas: number|string;
datas='string';

// using objects 

type persons={
    name:string;
    age: number;
    height:number;
}

type statuss={
    jobstatus:boolean;
    maritalStatus:boolean;
}

let deta:persons|statuss={
    name:"Vardhan" ,age:25, height:5.5, jobstatus:true,maritalStatus:false
}

console.log(`My details are:`, deta);
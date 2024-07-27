var dat = "Hello, world!";
//dat = 42; // This code compiles without errors.
//datas = true; // This code compiles as well.
console.log(dat); // it will print the last assigned value 
// Any type

let bnamess:any;
bnamess="Hii";
bnamess=23;
bnamess=true;

// alternative methods of any type

let dragon:string="dragon";
//dragon=24;

let dragons:number|string| boolean;
dragons="dragon";
dragons=2;
dragons=false;
// type gaurds method
function dragonhouse(inputs:unknown){
    if (typeof inputs === "string"){
        return inputs;
    }else if(inputs === 23){
        return inputs;
    }

}

// AS Type

let unknowndata:unknown;

/*unknowndata=34;
let knowndata=(unknowndata as string).toLowerCase();
console.log(knowndata);

unknowndata ="String value";
let knowndatas= (unknowndata as number);
//unknowndata.toString();
console.log(knowndatas);*/

// Generics 
//let number1:number;
type bootle={
    brand:string,
    version:number
}
function  DragonHouse<bootle>(details:bootle):bootle{
    //return details.toLowerCase();

/*if (typeof details === 'string'){
    return details.toLowerCase();
}*/
return details ;//{details[brand]:'string', version: 56};
}



let vall=DragonHouse({ brand:'string', version:34});
console.log(vall);
//DragonHouse(23);
//DragonHouse<string>('string');

// == & ===

/*let numb1:string= 'string';
let numb2=45;
console.*/
let num1= "10"; 
let num2= 10;
 
console.log(num1 == num2);

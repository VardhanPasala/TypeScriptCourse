var dat = "Hello, world!";
//dat = 42; // This code compiles without errors.
//datas = true; // This code compiles as well.
console.log(dat); // it will print the last assigned value 
// Any type
var bnamess;
bnamess = "Hii";
bnamess = 23;
bnamess = true;
// alternative methods of any type
var dragon = "dragon";
//dragon=24;
var dragons;
dragons = "dragon";
dragons = 2;
dragons = false;
// type gaurds method
function dragonhouse(inputs) {
    if (typeof inputs === "string") {
        return inputs;
    }
    else if (inputs === 23) {
        return inputs;
    }
}
// AS Type
var unknowndata;
function DragonHouse(details) {
    //return details.toLowerCase();
    /*if (typeof details === 'string'){
        return details.toLowerCase();
    }*/
    return details; //{details[brand]:'string', version: 56};
}
var vall = DragonHouse({ brand: 'string', version: 34 });
console.log(vall);
//DragonHouse(23);
//DragonHouse<string>('string');

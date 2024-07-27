function getArea(shape) {
    if (shape.kind === "circle") {
        // We know it's a Circle interface here
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        // We know it's a Square interface here
        return Math.pow(shape.sideLength, 2);
    }
}
var circle = { kind: "circle", radius: 5 };
var square = { kind: "square", sideLength: 4 };
console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(square)); // Output: 16
// Union Types
var data;
data = "vardhan";
data = 234;
data = false;
var persondetails = { name: "Vardhan", age: 25, height: 5.6, jobStatus: true, maritalStatus: false };
//persondetails={jobStatus:true, maritalStatus:false}
console.log(persondetails);
// Using functions
var names;
names = "Vardhan";
names.toUpperCase();
function getdetails(information) {
    //information.toUpperCase();
    if (typeof information === "string") {
        console.log(information.toUpperCase());
    }
    else {
        console.log("It is number");
    }
}
getdetails("simhadri");
//getdetails(24);
//getdetails(true);
function getDetailsofme(informations) {
    if (typeof informations === "string") {
        console.log(informations.toLocaleUpperCase());
    }
    else if (informations === 40) {
        console.log(informations.toString());
    }
    else {
        console.log("It is a boolean value");
    }
}
// here in the function we can provide any one value at a time.
//getDetailsofme(22);
getDetailsofme("Vardhan");
//getDetailsofme(false);
var array1 = ["Vardhan", "Simhadri", 1, 2, 3, false];
console.log(array1);

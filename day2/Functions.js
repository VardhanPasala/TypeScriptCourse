//for number type
function addnum(num1, num2, num3) {
    return num3 = num1 + num2;
}
console.log(addnum(45, 56, 0));
//for string type
function logindetails(name, Email, password) {
    return "".concat(name, ", ").concat(Email, ", ").concat(password);
}
var loginUser = function (name, phoneNum) {
    return "".concat(name, ", ").concat(phoneNum);
};
console.log(loginUser('Vardhan', 939107));
//logindetails("vardhan","vardhan@gmail.com","VardhanVardhan");
console.log(logindetails("vardhan", "vardhan@gmail.com", "VardhanVardhan"));
// Using arrow functions
var loginUse = function (name, isPail) {
    return "".concat(name, ", ").concat(isPail);
};
console.log("The login credentials are" + loginUse("Vardhan", false));
// functions using loops 
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array1.forEach(function (add) {
    console.log(add * 2);
});
var numlist;
numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numlist.forEach(function (multiply) {
    console.log(multiply * 2);
});

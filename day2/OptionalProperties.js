var information = /** @class */ (function () {
    function information() {
    }
    // color?: string | undefined;
    information.prototype.display = function () {
        return "My name is: ".concat(this.name, ", My age is : ").concat(this.age);
    };
    return information;
}());
var obj = new information();
obj.name = "Vradhan";
obj.age = 24;
console.log(obj.display());

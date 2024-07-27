var c1 = /** @class */ (function () {
    function c1() {
    }
    c1.prototype.details = function () {
        return "My firstName Is: ".concat(this.FirstName, ", MylastNmae is: ").concat(this.LastName, ", and my Email is: ").concat(this.email);
    };
    c1.prototype.adding = function () {
        return this.num1 + this.num2;
    };
    c1.prototype.substitute = function () {
        return (this.num1 - this.num2);
    };
    c1.prototype.multiply = function () {
        return (this.num1 * this.num3);
    };
    return c1;
}());
var c2 = new c1();
c2.FirstName = "Govardhan";
c2.LastName = "Pasala";
c2.email = "vardhan@gmail.com";
c2.num1 = 24;
c2.num2 = 34;
c2.num3 = 45;
console.log(c2.adding(), c2.substitute(), c2.multiply());
console.log(c2.details());


// Interface with functions


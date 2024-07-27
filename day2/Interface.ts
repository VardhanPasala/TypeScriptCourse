interface interface1{
    FirstName:string;
    LastName:string;
    email:string;
    array1:number[];

    details();

    multiply:(multi)=>{

    
    }

    

    

}

interface interface2 extends interface1{

    num1:number;
    num2:number;
    num3: number;
adding();
substitute();
multiply();

}

class c1 implements interface2{
    FirstName: string;
    LastName: string;
    email: string;
    num1: number;
    num2: number;
    num3: number;
    details() {
        return`My firstName Is: ${this.FirstName}, MylastNmae is: ${this.LastName}, and my Email is: ${this.email}`
    }

    adding() {
        return this.num1+this.num2;
    }

    substitute() {
        return (this.num1-this.num2)
    }

    multiply() {
        return(this.num1*this.num3);
    }
}

let c2= new c1();

c2.FirstName="Govardhan";
c2.LastName="Pasala"
c2.email="vardhan@gmail.com"
c2.num1=24;
c2.num2=34;
c2.num3= 45;

console.log(c2.adding(), c2.substitute(), c2.multiply());

console.log(c2.details());

interface Person {
	name: string;
	age: number;
	//  ?: makes the property optional
	color?: string; 

    display();
}

class information implements Person{
    name: string;
    age: number;
   // color?: string | undefined;

    display() {
        return`My name is: ${this.name}, My age is : ${this.age}`
    }
}

let obj=new information();

obj.name="Vradhan";
obj.age=24;

console.log(obj.display())
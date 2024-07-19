interface EmpID{
    empID:number;
    empName: String;
    empSalary:number;
    displayDATA:()=> void;
}

let details:EmpID={
    empID:2143906,
    empName:"Vardhan",
    empSalary:30000,
    displayDATA():void{
        console.log(this.empID+" "+this.empName+" "+this.empSalary)
    }
};

console.log(details.empID);
console.log(details.empName);
console.log(details.empSalary);
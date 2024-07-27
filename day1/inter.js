var details = {
    empID: 2143906,
    empName: "Vardhan",
    empSalary: 30000,
    displayDATA: function () {
        console.log(this.empID + " " + this.empName + " " + this.empSalary);
    }
};
console.log(details.empID);
console.log(details.empName);
console.log(details.empSalary);

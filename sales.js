class SalesEmployee {
    constructor(empId, name, salesTarget) {
        this.empId = empId;
        this.name = name;
        this.salesTarget = salesTarget;
    }

    introduce() {
        console.log(`I am ${this.name}, working in Sales.`);
    }
    doWork() {
        console.log(`${this.name} is working.`);}

    achieveTarget(amount) {
        console.log(`${this.name} achieved sales of ${amount}`);
    }
}

var emp1 = new SalesEmployee(101,"sanika",20000,);
emp1.introduce();
emp1.doWork();
emp1.achieveTarget(20000);
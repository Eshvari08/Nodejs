// Parent Class
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }

   calculateSalary() {
        return 2000;
    }
}

class SalesEmployee extends Employee {
    constructor(id, name, salesAmount) {
        super(id, name);     
        this.salesAmount = salesAmount;
    }

    calculateSalary() {
        const baseSalary = super.calculateSalary(); 
        const commission = this.salesAmount * 0.05; 
        return baseSalary + commission;
    }

    getDetails() {
        return `${super.getDetails()}, Sales Amount: ₹${this.salesAmount}`;
    }
}
const manager = new SalesEmployee(301, "Eshvari", 1000);
console.log(manager.getDetails());
console.log("Salary:", manager.calculateSalary());
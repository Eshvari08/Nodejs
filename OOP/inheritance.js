class Employee {
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
    getDetails() {
        return `ID: ${this .id}, Name: ${this.name}`;
    }
    //calculateSalary(){
      //  return 20000;
    }
//}

class SalesEmployee extends Employee {
  constructor(id, name, salesAmount) {
    super(id, name); // inherit identity
    this.salesAmount = salesAmount;
  }

  calculateSalary() {
    const baseSalary = 20000;
    const commission = this.salesAmount * 0.05;
    return baseSalary + commission;
  }
}

const salesEmp = new SalesEmployee(101, "Eshvari", 500000);
console.log(salesEmp.getDetails());
console.log("Salary:", salesEmp.calculateSalary());
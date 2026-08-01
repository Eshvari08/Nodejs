class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getDetails() {
    return `Employee [${this.id}] : ${this.name}`;
  }

  calculateSalary() {
    return 0; // base employee has no salary logic
  }
}
const emp1 = new Employee(101, "Ravi");
console.log(emp1.getDetails());
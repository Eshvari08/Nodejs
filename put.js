console.log("Welcome to Transflower HR Solution");

  function welcomeEmployee(name) {
 console.log("Welcome" + name);
 }

 class Employee {
 
    constructor(empId, name, department){
        this.empId = empId;
        this.name = name;
        this.department = department;
     }
     introduce() {
        console.log(
            `i am ${this.name},working in ${this.department}`
        );
     }
     doWork() {
        console.log(
            `${this.name} is working`
        );
     }
    }

    class Asset {
        constructor(assetName,assignedTo) {
            this.assetName = assetName;
            this.assignedTo = assignedTo;
        }

        assign() {
            console.log( `${this.assetName }
      assigned to ${this.assignedTo}`
            );
        }
    }
    welcomeEmployee("Giriraj");
let emp1 = new Employee (1,"Giriraj","Engineering");
emp1.introduce();
emp1.doWork();

let laptop2 = new Asset("MacBook", "Giriraj");
laptop2.assign();
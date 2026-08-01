function welcomeEmployee(name) {
   console.log(`Welcome to the organization, ${name}!`);
}

welcomeEmployee("Eshvari");
 

class Employee{
    constructor(Empid,Empname,Department){
        this.Empid = Empid;
        this.Empname = Empname;
        this.Department = Department;
    }
        
        introduce() {
        console.log(
          `Hi, I am ${this.name} from ${this.department} department.`
        );
    }

    doWork() {
        console.log(`${this.name} is working.`);
    }
}


var emp1 = new Employee(101,"shrutii","HR");
emp1=introduce();
emp1=dowork();


class Employee{

    constructor(Empid,Empname,Department){

        this.Empid = Empid;
        this.Empname = Empname;
        this.Department = Department;
    }
        
        introduce() {
        console.log(
          `Hi, I am ${this.Empname} from ${this.Department} department.`);
    }

    doWork() {
        console.log(`${this.Empname} is working.`);
    }
}


var Emp1 = new Employee(101,"shrutii","HR");
Emp1.introduce();
Emp1.doWork();

var Emp2 = new Employee(102,"sanu","IT");
Emp2.introduce();
Emp2.doWork();


console.log("Welcome to IT Company");

function welcomeDeveloper(name) {
    console.log("Welcome " + name);
}

class Developer {

    constructor(devId, name, technology) {
        this.devId = devId;
        this.name = name;
        this.technology = technology;
    }

    introduce() {
        console.log(
            `I am ${this.name}, working on ${this.technology}`
        );
    }

    doCoding() {
        console.log(
            `${this.name} is coding`
        );
    }
}

class Project {

    constructor(projectName, assignedTo) {
        this.projectName = projectName;
        this.assignedTo = assignedTo;
    }

    assign() {
        console.log(
            `${this.projectName} project assigned to ${this.assignedTo}`
        );
    }
}

welcomeDeveloper("Riya");

let dev1 = new Developer(101, "Sanika","javascript");
dev1.introduce();
dev1.doCoding();

let project1 = new Project("Shopping Website", "Riya");
project1.assign();
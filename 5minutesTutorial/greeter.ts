class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person:Person){
    return "Hello, " + person;
}

// let user = "Jane User";
// let user = [0, 1, 2];//動かない 
// let user = { firstName: "Jane", lastName: "User" };
let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
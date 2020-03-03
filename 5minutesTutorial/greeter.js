var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName;
}
// let user = "Jane User";
// let user = [0, 1, 2];//動かない 
// let user = { firstName: "Jane", lastName: "User" };
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);

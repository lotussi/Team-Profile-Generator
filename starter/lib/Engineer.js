// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constuctor(id, name, email, github) {
    super(name, id, email);
    this.github = this.github;
    this.role = "Engineer";
};
getGithub() {
    return this.github;
};

getRole() {
    return this.role;

};

};
module.exports = Engineer;
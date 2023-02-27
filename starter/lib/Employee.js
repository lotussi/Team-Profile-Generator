// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "Employee";
    };

    getName() {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}
    module.exports = Employee;


    

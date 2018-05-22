var Employee = require('./employee');
class CEO extends Employee {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary);
        this.dressCode = 'suit';
        this._salary = salary;
    }
    gossip(name, log) {
        console.log(name.getname(), log)

    };
    getSalary() { // simulate public method
        return super.getSalary() * 2;
    };
    work(employee) { // simulate public method
        this._fire(employee);
        this._hire(employee);
        this._seminar();
        this._golf();
    }
    _fire(employee) {
        this.dressCode = "tshirt";
        console.log("Somsri has been fired! Dress with :" + this.dressCode);
    }
    _hire(employee) {
        this.dressCode = "tshirt";
        console.log("Somsri has been hired back! Dress with :" + this.dressCode);
    }
    _seminar() {
        this.dressCode = 'suit';
        console.log("He is going to seminar Dress with :" + this.dressCode);
    }
    increaseSalary(employee, newSalary) {
        if (!employee.setSalary(newSalary)) {
            console.log(employee.getname() + 's salary is less than before!!')
        } else {
            console.log(employee.getname() + 's salary has been set to ' + newSalary)
        }
    }
    _golf() { // simulate private method
        this.dressCode = 'golf_dress';
        console.log("He goes to golf club to find a new connection." + " Dress with :" + this.dressCode);

    };
}
module.exports = CEO;
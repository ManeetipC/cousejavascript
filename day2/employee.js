class Employee {
    constructor(firstname, lastname, salary) {
        this._salary = salary; // simulate private variable
        this._firstname = firstname;
    }
    getname() {
        return this._firstname;
    }
    setSalary(newSalary) { // simulate public method
        // return newSalary ถ้ามีเงินเดือนใหม่มีค่ามากกว่า this._salary
        // return false ถ้าเงินเดือนใหม่มีค่าน้อยกว่าเท่ากับ this._salary
        if (newSalary > this._salary) {
            this._salary = newSalary
            return this._salary
        } else {
            this._salary = newSalary
            return false
        }

    }
    getSalary() { // simulate public method
        return this._salary;
    };
    work(employee) {
        // leave blank for child class to be overidden
    }
    leaveForVacation(year, month, day) {

    }
}

module.exports = Employee;
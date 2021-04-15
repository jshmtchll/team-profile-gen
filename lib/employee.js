class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name
    }
}

module.exports = Employee
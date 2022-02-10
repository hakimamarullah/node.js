class Employee {
	#name;
    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    getName() {
        return this.#name;
    }

    set setName(name) {
        this.#name = name;
    }
}

class Manager extends Employee {
    constructor(name, age, degree) {
        super(name, age);
        this.degree = degree;
    }
}

const hakim = new Employee("Hakim", 20);
const nisdar = new Manager("Nisdar", 20, "S1");

console.log(hakim.getName())
console.info(nisdar)
"use strict";
class Employee2 {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        console.log(` Persons name: ${this.name}
                                Persons age: ${this.age} 
                                Persons salary: ${this.salary}`);
    }
}
const d = new Employee2("abc", 20, 202034);

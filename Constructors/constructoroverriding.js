"use strict";
class Employee1 {
    //name:string 
    constructor(name) {
        console.log(`${name}  constructor is here`);
        //this.name=name;
    }
    login() {
        console.log(`Emloyee has loged in`);
    }
    logout() {
        console.log(`Employee has logged out`);
    }
    requestleaves(leaves) {
        console.log(`Emplyee has requested ${leaves} leaves-Auto approved`);
    }
}
class Programmer1 extends Employee1 {
    constructor(name) {
        super(name);
        console.log(`${name} Programmer's cnstructor is  here.This is newly created constructor`);
        ///this.name=name
    }
    // constructor(...args){ -----If there is no constructor in child class it wil be created automatically
    //     super(...args)
    // }
    requestcoffee(x) {
        console.log(`Employee has requested ${x} coffees`);
    }
}
const ab = new Programmer1("bruno");
ab.login();
ab.requestleaves(3);

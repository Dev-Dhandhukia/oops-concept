"use strict";
class Employeeee {
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
class Programmerrr extends Employeeee {
    requestcoffee(x) {
        console.log(`Employee has requested ${x} coffees`);
    }
    //method overriding and super method
    requestleaves(leaves) {
        super.requestleaves(4);
        console.log("one extra is granted");
        //   console.log(`Emplyee has requested ${leaves + 1} leaves (one extra)`) 
    }
}
// const e= new Employee()
// e.login()
// e.requestleaves(3)
const f = new Programmerrr();
f.login();
f.requestleaves(3);
f.requestcoffee(3);

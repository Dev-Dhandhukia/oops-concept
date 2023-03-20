"use strict";
//     Interface multiple inheritance is not supported in TypeScript.
// However, you can achieve a similar effect using interface extension.
class MyClass {
    print() {
        console.log("Printing...");
    }
    log() {
        console.log("Logging...");
    }
}
const c1 = new MyClass();
c1.print();
// In this example, we define two base interfaces Printable and Loggable, and then define a new interface 
// PrintableAndLoggable that extends both of them. We can then implement PrintableAndLoggable in the MyClass class.
//  By using interface extension, we can achieve a similar effect to interface multiple inheritance.
//   However, it's important to note that interface extension only allows you to inherit properties and
//    methods from other interfaces, not from classes.

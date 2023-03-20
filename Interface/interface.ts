//     Interface multiple inheritance is not supported in TypeScript.
// However, you can achieve a similar effect using interface extension.

// Interface extension is a way to create a new interface that extends one or more existing interfaces. 
//This allows you to inherit the properties and methods of the base interfaces, as well as add new ones.

// Here's an example of how to use interface extension to achieve multiple inheritance:

    
        

interface printable{
  print(): void;
}

interface loggable {
  log(): void;
}

interface PrintableAndLoggable extends printable, loggable {
  // You can add new properties and methods here
  // that are specific to PrintableAndLoggable
}

class MyClass implements PrintableAndLoggable {
  print() {
    console.log("Printing...");
  }

  log() {
    console.log("Logging...");
  }
}

const c1=new MyClass()
c1.print()
   
    // In this example, we define two base interfaces Printable and Loggable, and then define a new interface 
    // PrintableAndLoggable that extends both of them. We can then implement PrintableAndLoggable in the MyClass class.
    
    //  By using interface extension, we can achieve a similar effect to interface multiple inheritance.
    //   However, it's important to note that interface extension only allows you to inherit properties and
    //    methods from other interfaces, not from classes.

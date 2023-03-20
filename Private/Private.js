"use strict";
//In protected : single , multilevel inheritance is possible .
//         class bottle{
class bottle {
    constructor() {
        this._waterlevel = 0;
        // _getwaterlevel():number{
        //     return this._waterlevel; 
        // }
    }
    _setwaterlevel(value) {
        return this._waterlevel = value;
    }
}
class milton extends bottle {
    newmethod() {
        console.log("i m ne method");
    }
    _getwaterlevel() {
        return this._waterlevel;
    }
}
class milton1 extends milton {
    newmethod1() {
        console.log("i m ne method");
    }
}
const obj = new milton1();
console.log(obj._setwaterlevel(100));
console.log(obj._getwaterlevel());
// IN private it is also possible to access the private property by assinging the method to it .
// It is possible in both single layer and multilevel inheritance 
// class BankAccount{
//     name="abc";
//     pin ="12345"
//     #getname(){
//         return this.name;
//     }
//     #getifsccode(){
//         return "00001111"
//     }
//     getdetails(){
//         return {
//             pin:this.pin,
//             name:this.name,
//             ifsc:this.#getifsccode,
//             name1:this.#getname
//         }
//     }
// } 
// class Customer extends BankAccount{
//     customername(){
//         console.log("i m customer")
//     }
// }
// class customer1 extends Customer{
//     customername1(){
//         console.log("i m customer")
//     }
// }
// const customer=new customer1()
// console.log(customer.getdetails()) 
//Private and method 
// class BankAccount{
//     #name:string="abc";
//     #pin:number =12345
//     getname():string{
//         //console.log (this.name) 
//         return this.#name
//     }
//     #getifsccode(){
//         //console.log ("00001111")
//         return "00001111"
//     }
//     getdetails(){
//         return {
//             pin:this.#pin,
//             name:this.#name,
//             ifsc:this.#getifsccode(),
//             name1:this.getname()
//         }
//     }
// } 
// class Customer extends BankAccount{
//     customername(){
//         console.log("i m customer")
//     }
// }
// class customer1 extends Customer{
//     customername1(){
//         console.log("i m customer")
//     }
// }
// const customer=new customer1()
// console.log(customer.getdetails())

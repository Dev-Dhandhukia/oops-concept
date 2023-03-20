class parent1{
    constructor(){
        console.log("parent constructor called")
    }
    info():string{
        // console.log("parent class called") 
        return "parnet class called"
    }
}
class child extends parent1{
    info1():string{
    //console.log("child class called ")}
    return "123"
} }
class child1 extends parent1{ 
info2():number {
   // console.log("child 1 class called 1")
   return 123
}}
class child2 extends child{
info3():number{
    //console.log("child 2 class called")
    return 123
} }
const b1=new child2()
const b2=new child1()
const b3=new child()
b1.info1()
b2.info()
b3.info()


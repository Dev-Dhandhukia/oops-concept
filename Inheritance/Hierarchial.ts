class parent2 {
    constructor(){
        console.log("constructor called")
    }

    info():string{
        //console.log("parent class")
        return "parent class"
    }
}
class child3 extends parent2{
    info1():string{
          //console.log("child class")
          return "12"       
    }
} 
class child4 extends parent2{
    info2(){
        console.log("child class 2")
    }
}
class child5 extends parent2{
    info3():string{
       // console.log("child class 3") 
       return "number"
    }
} 
const a1=new child5()
const a2=new child4()
const a3=new child3()
console.log(a1.info())
console.log(a2.info())
console.log(a3.info())

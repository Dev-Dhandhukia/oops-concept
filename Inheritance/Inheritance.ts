class employee{
    name:string
    age:number
    salary:number
    constructor(name:string,age:number,salary:number){
         this.name=name;
        this.age=age;
        this.salary=salary;
        console.log("constructor called")}
    info():any
    {
        document.write(`<h3>Employee class<h3><br>
                          Name:${this.name}<br>
                          Age: ${this.age}<br>
                          Salary :${this.salary}` )
    }    
    
} 
//single level inheritance 
class Manager extends employee{
    info(){
        // super.info()
        const pa=1000;
        const ta=1000;
        const TotalSalary=this.salary + pa +ta;
        console.log(`<h3>Manager class<h3>
                          Name:${this.name}<br>
                          Age: ${this.age}<br>
                          Salary :${TotalSalary}` )

    }
} 
//multilevel inheritance
class test extends Manager{
    
   
    info(){
        super.info()
        const pa=1000;
        const ta=1000;
        const TotalSalary=this.salary + pa ;
        console.log(`<h3>Test class<h3>
                          Name:${this.name}<br>
                          Age: ${this.age}<br>
                          Salary :${TotalSalary}` )

    }
}
const abc=[new Manager("abc",25,25000),new Manager("abc",25,250000)]

 
abc.forEach(function(value,index){
    value.info()
})
const aa=new test("ccd",21,20330)   
aa.info()

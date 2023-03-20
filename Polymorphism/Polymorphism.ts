
        class shape{
            draw():string{
            return "i am generic shape"}
        } 
        class square extends shape{
             draw():string{
            return "i am sqaure" 
            }
        }
        class circle extends shape{
            draw():string{
            return "i am circle" 
            }
        } 
        const a= new shape()
        console.log(a.draw())
        const b=new square()
        console.log(b.draw())
        const c=new circle()
        console.log(c.draw())

  
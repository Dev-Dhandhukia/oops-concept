

// method overriding = a child class will use methods
//                     with the same name that are
//                     most closely associated with it.
                    


class Vehicle{

  drive():string{
    console.log("You drive the vehicle");
    return ""
  }
  }
  
  class Car extends Vehicle{
  
  drive():string{
     super.drive()
    console.log("You drive the car!"); 
    return ""
  }
  }
  
  class RaceCar extends Car{
  
  drive():any{
    super.drive()
    console.log("You drive the race car!!!!!!!");
  }
  }
  
  let vehicle = new Vehicle();
  let car = new Car();
  let raceCar = new RaceCar();
  
  // console.log(vehicle.drive());
  // console.log(car.drive());
  raceCar.drive();
  
      
// Create the Dog class constructor
// Create Marty
// Pat him 5 times

class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.barklevel = 10;
    this.energylevel = 0;
  } 
  pat(){
    this.barklevel -= 1;
    this.energylevel += 1;
    console.log(this.name, this.age, this.barklevel, this.energylevel)
  }
  }
 let myDog = (Dog("Marty", 5, "retriever", "brown"));

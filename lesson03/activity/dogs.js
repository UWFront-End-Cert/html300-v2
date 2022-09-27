// Create the Dog class constructor OPTION 1

let barkLevel = 0;
let energyLevel =10;

class dog{
  constructor(name, age, breed, color, barkLevel, energyLevel){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.barkLevel = barkLevel;
    this.energyLevel = energyLevel;
  }
  pat(x){
    console.log(`START ${barkLevel} ${energyLevel}`);
    barkLevel = barkLevel - 1;
    energyLevel = energyLevel + 1;
    console.log(barkLevel , energyLevel);
  }
}

// Create Marty
const Marty = new dog('Marty', 4, 'lab', 'chocolate', barkLevel, energyLevel);

// Pat him 5 times


Marty.pat();
Marty.pat();
Marty.pat();
Marty.pat();
Marty.pat();



//OPTION 2
//Creat the Dog function using Constructors
function Dog(name, age, breed, color){
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.color = color;
  this.energyLevel = 0;
  this.barkLevel = 10;
  this.pat = function(){
    this.energyLevel++
    this.barkLevel -= 1
    console.log(`This dog is called ${this.name} and is ${this.age * 7} human years old. Bark Level is ${this.barkLevel}, energy level is${this.energyLevel}.`)
  };
}

//create marty

const marty = new dog('Marty', 3, 'lab', 'chocolate')

// Pat him 5 times

console.log(Marty);

Marty.pat();
Marty.pat();
Marty.pat();
Marty.pat();
Marty.pat();

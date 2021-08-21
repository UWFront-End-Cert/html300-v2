// Create the Dog class constructor
class Dog {

constructor(name, age, breed, color) {
this.name = name;
this.age = age;
this.breed = breed;
this.color = color;
this.energyLevel = 0;
this.barkLevel = 10;  
}

pat() {
this.energyLevel++;
this.barkLevel--;
console.log(`This dog's name is ${this.name}, age is ${this.age}, current
energy ${this.energyLevel} and current bark level is ${this.barkLevel}.`);
}


}

// Create Marty
const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

const max = new Dog('Max', 3, 'Golden Retriver', 'Gold');
  
// Pat him 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat(); 

max.pat();
max.pat();
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
    // pat method
pat() {
    this.energyLevel++
    this.barkLevel--;
    console.log(`The dog's name is ${this.name}, age is ${this.age}, current energy is ${this.eneergyLevel}, and current bark level is ${this.barkLevel}.`);
}
}


// Create Marty
const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

// Pat him 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();
// Create the Dog class constructor
class Dog {
    constructor(name, age, breed, color, barkLevel, energyLevel) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
        this.barkLevel = barkLevel;
        this.energyLevel = energyLevel;

    }
    pat(x) {

        this.barkLevel += x;
        this.energyLevel++;
        console.log(`${this.name}'s energy level is ${this.energyLevel} and their bark level is ${this.barkLevel}.`)
    }
}

// Create Marty

const marty = new Dog('Marty', 7, 'Catahoula', 'brown', 5, 5);

// Pat him 5 times
marty.pat(5);
// Create the Dog class constructor



// Create Marty

// Pat him 5 times

class Dog {
    constructor(name, age, breed, color) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
        this.energylevel = 0;
        this.barklevel = 10;
    }


pat() {
    this.energylevel++
    this.barkLevel--;
    console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy ${this.energylevel} and current bark level is ${this.barklevel}.`);
    }
}

const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();


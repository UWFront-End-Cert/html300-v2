// ES6+ class syntax
  // Create the Dog class constructor
class Dog {
  // Give it expected parameters
  constructor(name, age, breed, color) {
    // Set those equal to the instance
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.energylevel = 0;
    this.barklevel = 10;
  }

  // pat method
  pat() {
    // Increment energy
    this.energylevel++;
    // Decrement bark
    this.barklevel--;
    // Log out the dog's info
    console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy ${this.energylevel} and current bark level is ${this.barklevel}.`);
  }
}
  // Create Marty
  const marty = new Dog('Marty', 6, 'Mutt', 'Brown');
    // Dog {name: "Marty", age: 6, breed: "Mutt", color: "Brown"}

  // Pat him 5 times
  marty.pat();
  marty.pat();
  marty.pat();
  marty.pat();
  marty.pat();

// Create the Dog class constructor
function dog(name, age, breed, color) {
    this.name = name
    this.age = age
    this.breed = breed
    this.color = color
    this.barkLevel = 10
    this.energyLevel = 0
    this.pat = function(){
        this.energyLevel += 1 //or ++ //or this.energyLevel + 1
        this.barkLevel -= 1
        console.log(`This dog is called ${this.name} and is ${this.age * 7} human years old. Bark level is ${this.barkLevel}, energy level is ${this.energyLevel}.`);
    }
}
// Create Marty
const Marty = new dog('Marty', 1, 'beagle', 'white');
console.log(Marty);
// Pat him 5 times
Marty.pat()
Marty.pat()
Marty.pat()
Marty.pat()
Marty.pat()
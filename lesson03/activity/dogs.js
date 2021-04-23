// Create the Dog class constructor
function dog(name, age, breed, color, barkLevel, energyLevel) {
    this.name = name,
    this.age = age,
    this.breed = breed,
    this.color = color,
    this.barkLevel = "10",
    this.energyLevel = "0"

    function pat(barkLevel, energyLevel){
        this.barkLevel = this.barkLevel - 1;
        this.energyLevel = this.energyLevel + 1;
        console.log(this.name, this.age, this.barkLevel, this.energyLevel);
    };
}
// Create Marty
const Marty = new dog('Marty', 1, 'beagle', 'white', 5, 3);
console.log(Marty);
// Pat him 5 times

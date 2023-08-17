
// Start of the exercise adventure.
const startExercises = () => {
  alert("Welcome to the ES6+ exercises!");
  doubleNumbers();  // Next: make numbers big
}

// Double numbers. Yup.
const doubleNumbers = () => {
  const input = prompt("Enter a few comma-separated numbers to double them:");
  // Make 'em bigger
  const doubled = input.split(',').map(num => Number(num) * 2);
  alert(`Doubled: ${doubled.join(', ')}`);
  filterNumbers();  // Onwards
}

// Uhh, filters out the smaller numbers, I guess?
const filterNumbers = () => {
  const input = prompt("Enter a few comma-separated numbers. We'll show the ones greater than 10:");
  // Magic
  const filtered = input.split(',').map(Number).filter(num => num > 10);
  alert(`Numbers > 10: ${filtered.join(', ')}`);
  swapKeyValue();  // Keep going
}

// Let's swap key-values. Dunno why, but hey.
const swapKeyValue = () => {
  const input = prompt("Enter a key-value pair like 'key:value'.");
  // Do the swapping thing
  const swapped = Object.fromEntries(Object.entries(Object.fromEntries(input.split(',').map(pair => pair.split(':')))).map(([key, value]) => [value, key]));
  alert(`Swapped: ${JSON.stringify(swapped)}`);
  calculateSum();  // And another one
}

// I mean, it sums things. Woo.
const calculateSum = () => {
  const input = prompt("Enter a few comma-separated numbers. We'll calculate the sum.");
  const sum = input.split(',').map(Number).reduce((acc, num) => acc + num, 0);
  alert(`Sum: ${sum}`);
  spreadExample();  // Something with spreads next
}

// More number stuff, now with spread.
const spreadExample = () => {
  const input = prompt("Enter three comma-separated numbers. We'll add 5 and 10 to the set and display.");
  const numbers = [...input.split(','), 5, 10];  // Spread 'em out
  alert(`Numbers with added values: ${numbers.join(', ')}`);
  destructureExample();  // Fancy word: destructure
}

// Destructure magic. Fancy.
const destructureExample = () => {
  const input = prompt("Enter a pair like 'key:value'.");
  const [key, value] = input.split(':');
  alert(`Key: ${key}, Value: ${value}`);
  finishExercises();  // Finally!
}

// That's a wrap!
const finishExercises = () => {
  alert("You're never getting those moments of your life back, I hope you enjoyed them.");
}

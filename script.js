function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}


const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};


const instructors = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  }
};


const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    return noise;
  }
});

// Test cases
const d = createAnimal("dog", "bark", "Woooof!");
console.log(d); // Output: {species: "dog", bark: ƒ}
console.log(d.bark()); // Output: "Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
console.log(s); // Output: {species: "sheep", bleet: ƒ}
console.log(s.bleet()); // Output: "BAAAAaaaa"

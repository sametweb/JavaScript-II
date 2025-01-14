// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const allTheBooks = [
  { id: 1, name: "100 years of solitude" },
  { id: 2, name: "You are a badass" },
  { id: 3, name: "under the fifth sun" }
];

function bookSearch(searchTerm, callback) {
  let splittedName = searchTerm.split(" ");

  return callback(splittedName);
}

function shelfCheck(bookNameArray) {
  bookNameArray.map(item =>
    allTheBooks.map(book => {
      if (book.name.includes(item)) {
        console.log(
          `We have the book called "${book.name}" that fits your search term "${item}".`
        );
      }
    })
  );
}

bookSearch("You", shelfCheck);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.
  return function counter() {
    const limit = 5;
    if (count >= limit) {
      count = 0;
    }
    return ++count;
  };
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
console.log("myCounter", myCounter());
// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count
  };

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const countThis = counterFactory();

console.log(countThis.increase());
console.log(countThis.increase());
console.log(countThis.increase());
console.log(countThis.decrease());
console.log(countThis.decrease());
console.log(countThis.increase());

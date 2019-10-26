// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
const getLengthCallback = value => console.log("Length of the array is", value);

getLength(items, getLengthCallback);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
const lastCallback = value => console.log("Last item of the array is", value);

last(items, lastCallback);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}
const sumNumsCallback = value => console.log("Sum of the numbers is", value);

sumNums(10, 4, sumNumsCallback);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multiply = x * y;
  return cb(multiply);
}
const multiplyNumsCallback = value => console.log("Numbers multiply to", value);

multiplyNums(4, 6, multiplyNumsCallback);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let result = list.includes(item);
  return cb(result);
}
const containsCallback = value => {
  if (value) {
    console.log("Array includes the passed item");
  } else {
    console.log("Array does not include the passed item");
  }
};

contains("Pencil", items, containsCallback);

/* STRETCH PROBLEM */

const exampleArray = [
  "audi",
  "bmw",
  "mercedes",
  "volkswagen",
  "chevy",
  "fiat",
  "benz",
  "audi",
  "bmw"
];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const duplicateFree = [];
  array.map(item => {
    if (!duplicateFree.includes(item)) {
      duplicateFree.push(item);
    }
  });
  return cb(duplicateFree);
}

removeDuplicatesCallback = array => console.log("Duplicate free items", array);

removeDuplicates(exampleArray, removeDuplicatesCallback);

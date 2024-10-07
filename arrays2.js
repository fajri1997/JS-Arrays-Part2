/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  return numbers.length % 2 !== 0;
}
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4, 5, 6]));
console.log(isArrayLengthOdd([-1, 0, 1, -3, 10, -2]));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here

  return numbers.length % 2 === 0;
}
console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4, 5, 6]));
console.log(isArrayLengthEven([-1, 0, 1, -3, 10, -2]));

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  return instructors.concat("Laila");
}
console.log(addLailaToArray(["Mshary", "Hasan"]));

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * (["Brazil", "Germany", ""]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  return teams.concat("Italy");
}
console.log(eliminateTeam(["Brazil", "Germany"]));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 === 0) {
    const halfOfFruits = fruits.length / 2;
    return fruits.slice(halfOfFruits);
  } else {
    return [];
  }
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "blueberry",
  ])
);

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
  const exclamationSymbol = shout.indexOf("!");

  if (exclamationSymbol === -1) {
    return shout;
  }

  const shoutString = shout.slice(0, exclamationSymbol);
  return shoutString + "!";
}

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwift!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));

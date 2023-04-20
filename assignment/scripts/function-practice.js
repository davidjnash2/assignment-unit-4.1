console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end hello
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello ' + name + '!'; //set end result
} // end helloName
// Remember to call the function to test
console.log( 'running helloName:', helloName('Levi')); //test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {//define parameters
  let result = firstNumber + secondNumber; //add parameters
  return result; //get answer
} // end addNumbers
  console.log('result of addNumbers with 5 & 23:', addNumbers(5, 23)); // test; return firstNumber + secondNumber;



// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){ //define parameters
  let result = firstNumber * secondNumber * thirdNumber; //mulitplication of parameters
  return result; //get answer
} // end multiplyThree
console.log('The result of multiplyThree is:', multiplyThree(34, 34, 34)); //test


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  let result = false; //set default for anything smaller than 0
  if ( number >0 ){ //assign conditional
    result = true; //set result for values over 0
  }
  return result //answer for function
} // end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(0.00000000000001) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-0.0000000000001) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast( array ) {
  return array[array.length-1] //last index of array
} //end getLast 

console.log(getLast(['tire', 'fish', 'Lego', 'Jedi', 'toe', 'car'])); //test
console.log(getLast([])); //test

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){ //defining parameters
  let result = false; //default result if conditional is not met
  for (let i=0; i<array.length; i++){
    if (value===array[i]){ //check if value matches any item in array
      result = true; //assigning true value if condition is met
    }
  }
return result //end find with result
}// end find

console.log('find - should say true:', find( 'car', ['tire', 'fish', 'Lego', 'Jedi', 'toe', 'car']));
console.log('find - should say false:', find( 'chip', ['tire', 'fish', 'Lego', 'Jedi', 'toe', 'car']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) { //setting parameters for function
  let result = false; //giving result if condition is not met
    if (letter===string[0]){ //checking if first letter of string matches first parameter; string indexing
      result = true //result true if match
    }
return result //ending function with return of value
}// end isFirstletter

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') ); //test
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') ); //test

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
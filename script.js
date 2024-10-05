// pseudo code
let counter = 0; // Global counter to count function calls

function recursiveCall() {
  counter++;
  recursiveCall(); // Call itself recursively
}

try {
  recursiveCall(); // Start the recursion
} catch (error) {
  console.log("ERROR: Stack overflow -- ", error.message);
  console.log("Number of recursive calls before overflow:", counter);
}

//Output was 12564 recursive calls before overflow.


// Part One: 
// const factorial = (n) => {
//     if(n === 0) return 1;
//     return n * factorial(n-1);
// };


//PART TWO : TRAMPOLINES - make recursive call into iterative loop
//write a recursive function to flatten deeply nested array
//convert to trampoline function to avoid stack overflow.

//flatten

const factor = (n, a = 1) => {

}
//convert trampoline function

// setTimeout

//Output was 12564 recursive calls before overflow.

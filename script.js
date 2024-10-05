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

//PART TWO : TRAMPOLINES - make recursive call into iterative loop
//write a recursive function to flatten deeply nested array
//convert to trampoline function to avoid stack overflow.

//flatten

function flatten(arr) {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );
}

//convert trampoline function

function flattenArrayTrampoline(arr, result = []) {
    if (arr.length === 0) return result;  
  
    const [first, ...rest] = arr; 
  
    if (Array.isArray(first)) {
  
      return () => flattenArrayTrampoline(first.concat(rest), result);
    } else {
      result.push(first); 
      return () => flattenArrayTrampoline(rest, result);  
    }
  }


//Output was 125777 recursive calls before overflow.


// setTimeout
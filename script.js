//Part 1:

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

//Output was 12557 recursive calls before overflow.



//PART TWO : TRAMPOLINES - make recursive call into iterative loop
//write a recursive function to flatten deeply nested array
//convert to trampoline function to avoid stack overflow.

//flatten

// const facto = (n, a = 1) => {
//     if (n === 0) return a;
//     return () => facto(n - 1, n * a);
//   }
 

function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  function trampoline(func) {
    while (typeof func === 'function') {
      func = func();
    }
    return func;
  }
  
  function flatHelper(arr, result = []) {
    return function () {
      if (arr.length === 0) return result;
  
      let [first, ...rest] = arr;
      if (Array.isArray(first)) {
        return flatHelper([...first, ...rest], result);
      } else {
        result.push(first);
        return flatHelper(rest, result);
      }
    };
  }
  
  function trampolineFlatten(arr) {
    return trampoline(flatHelper(arr));
  }
  
  const nested = [1, [2, [3, [4, 5]], 6], 7];
  console.log(trampolineFlatten(nested));

//Output  length 7 


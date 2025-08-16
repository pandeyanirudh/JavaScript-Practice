function containSubString(str, subString){
    
    // str.indexOf(subString) tries to find where subString starts inside str.
    // If found → it returns the position (index number, like 0, 5, 10...).
    // If not found → it returns -1
    return str.indexOf(subString) !== -1;
}
console.log(containSubString("Hello I am JavaScript","Java"));

// In JavaScript, the method indexOf works like this:

// If it finds the substring → it gives the index number where it starts.
// Example:
// "Hello".indexOf("H");  // 0 (found at position 0)
// "Hello".indexOf("e");  // 1 (found at position 1)
// "Hello".indexOf("lo"); // 3 (found at position 3)


// If it does NOT find the substring → it returns -1.
// Example:   "Hello".indexOf("x");  // -1 (not found)


// So in your code:
// return str.indexOf(subString) !== -1;


// If indexOf gives -1 → substring is not found, so return false.

// If it gives any number (0, 1, 2, …) → substring exists, so return true.

// 👉 That’s why we compare with -1. It’s the special “not found” signal.
function union(arr1, arr2){
    // merges two arrays then removes duplicates
    // and returns the output as a new array.
    return [...new Set([...arr1, ...arr2])];
}
console.log(union([1,2,3,4],[3,4,5,6,7,8]));

// [...arr1, ...arr2]
// The ... (spread operator) takes all the elements from arr1 and arr2 and puts them into a single array.

// new Set([...arr1, ...arr2])
// A Set in JavaScript stores only unique values.
// When you give it [1, 2, 3, 4, 3, 4, 5, 6], it keeps only the first occurrence of each number:
// new Set([1, 2, 3, 4, 3, 4, 5, 6]) → {1, 2, 3, 4, 5, 6}
// Note: {} here means a Set, not an object.

// [...new Set(...)]
// The spread operator again converts the Set back into a regular array.
// {1, 2, 3, 4, 5, 6} → [1, 2, 3, 4, 5, 6].
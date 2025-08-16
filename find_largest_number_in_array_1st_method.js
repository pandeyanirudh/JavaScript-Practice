// 1st method
function findLargestNumber (arr){
    let largest = arr[0];
    for(i=1; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([56,99,100,59,203]));

// 2nd method
function largestNumber (arr){
    // Math.max is used for find the largest number
    return Math.max(...arr)
}
console.log(largestNumber([101, 102,103,104,105,106]));

// (...) spread operator
// The spread operator(...arr) expands the array element
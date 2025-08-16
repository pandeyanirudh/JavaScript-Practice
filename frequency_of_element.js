function frequency(arr){

    // Create an empty object
    // This will act like a “scoreboard” where the keys are the numbers (or items) from the array, and the values are how many times they’ve been seen.
    const freq = {};

    //Loop through each element in the array
    // We go from the first item to the last, one by one.
    for(let i=0; i<arr.length; i++){

        //Check if we’ve seen this item before
        // If the item already exists in freq (meaning we’ve counted it before), add 1 to its count.
        if(freq[arr[i]]){
            freq[arr[i]] += 1;
        }
        //If it doesn’t exist yet, start its count at 1.
        else {
            freq[arr[i]] = 1;
        }
    }

    //Return the scoreboard
    // At the end, we have an object showing each unique item and its count.
    return freq;
}
console.log(frequency([1,2,2,3,4,4,4,4,4,4]));

// The frequency function counts how many times each number appears in an array.
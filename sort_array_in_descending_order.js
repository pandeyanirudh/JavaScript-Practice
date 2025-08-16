// 8,7,6,5,4,3,2,1
function sortArray(arr){
    let n = arr.length;
    for(i=0; i<arr.length-1; i++){
        for(j=0; j<arr.length-1-i; j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([3,5,8,5,9,2]));


//We’re sorting descending (big to small) using Bubble Sort.


// Pass 1 (i = 0)
// Compare neighbors and swap if left < right.

// Compare 3 & 5 → 3 < 5 → swap → [5, 3, 8, 5, 9, 2]
// Compare 3 & 8 → 3 < 8 → swap → [5, 8, 3, 5, 9, 2]
// Compare 3 & 5 → 3 < 5 → swap → [5, 8, 5, 3, 9, 2]
// Compare 3 & 9 → 3 < 9 → swap → [5, 8, 5, 9, 3, 2]
// Compare 3 & 2 → 3 > 2 → no swap.

// End of Pass 1: [5, 8, 5, 9, 3, 2]
// (Largest so far — 9 — has bubbled to position 3, but still not at start!)


// Pass 2 (i = 1)
// Compare 5 & 8 → swap → [8, 5, 5, 9, 3, 2]
// Compare 5 & 5 → no swap → [8, 5, 5, 9, 3, 2]
// Compare 5 & 9 → swap → [8, 5, 9, 5, 3, 2]
// Compare 5 & 3 → no swap.
// End of Pass 2: [8, 5, 9, 5, 3, 2]


// Pass 3 (i = 2)
// Compare 8 & 5 → no swap.
// Compare 5 & 9 → swap → [8, 9, 5, 5, 3, 2]
// Compare 5 & 5 → no swap.
// End of Pass 3: [8, 9, 5, 5, 3, 2]


// Pass 4 (i = 3)
// Compare 8 & 9 → swap → [9, 8, 5, 5, 3, 2]
// Compare 8 & 5 → no swap.
// End of Pass 4: [9, 8, 5, 5, 3, 2]


// Pass 5 (i = 4)
// Compare 9 & 8 → no swap.

// No more swaps needed.
// 1,2,3,4,5,6 this is ascending order
function ascendingOrder(arr){
    for(i=0; i<arr.length; i++){
        for(j=i; j<arr.length; j++){
            if(arr[i]>arr[j]){
                a=arr[i];
                arr[i]=arr[j];
                arr[j]=a;
            }
        }
    }
    return arr;
}
console.log(ascendingOrder([5,2,9,1,6,34,9,6]));

                    //DRY RUN

// The idea of the code

// This is basically a simple sorting algorithm (like selection sort):

// Outer loop picks a position i in the array.
// Inner loop checks all positions after i (j = i to end).
// If it finds a smaller number at j, it swaps it with the number at i.

// End result → array sorted in ascending order.


// Dry run with [5, 2, 9, 1, 6, 34, 9, 6]

// We’ll track changes after each important swap.
// Initial array:  [5, 2, 9, 1, 6, 34, 9, 6]


// Outer loop i = 0
// Compare arr[0] with every other element:
// Compare 5 & 2 → swap → [2, 5, 9, 1, 6, 34, 9, 6]
// Compare 2 & 1 → swap → [1, 5, 9, 2, 6, 34, 9, 6]
// (rest no swap because 1 is smallest in this pass)


// Outer loop i = 1
// Compare arr[1] (5) with rest:
// 5 & 2 → swap → [1, 2, 9, 5, 6, 34, 9, 6]


// Outer loop i = 2
// Compare arr[2] (9) with rest:
// 9 & 5 → swap → [1, 2, 5, 9, 6, 34, 9, 6]
// 9 & 6 → swap → [1, 2, 5, 6, 9, 34, 9, 6]
// 9 & 6 → swap → [1, 2, 5, 6, 6, 34, 9, 9]


// Outer loop i = 3
// Compare arr[3] (6) with rest:
// 6 & 6 → no swap
// 6 & 34 → no swap
// 6 & 9 → no swap
// 6 & 9 → no swap


// Outer loop i = 4
// Compare arr[4] (9) with rest:
// 9 & 34 → no swap
// 9 & 9 → no swap


// Outer loop i = 5
// Compare arr[5] (34) with rest:
// 34 & 9 → swap → [1, 2, 5, 6, 6, 9, 34, 9]
// 34 & 9 → swap → [1, 2, 5, 6, 6, 9, 9, 34]


// Outer loop i = 6
// Compare arr[6] (9) with last element (34) → no swap.
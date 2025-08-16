function sumOfArray(arr){
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([10,20,30,40]));

// for(i = 0; i <= arr.length; i++)
// i should go strictly less than arr.length, because array indices go from 0 to arr.length - 1.
// Right now, when i === arr.length, arr[i] is undefined, and adding that will make the sum turn into NaN.
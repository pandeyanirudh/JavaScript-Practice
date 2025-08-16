function minValue(arr){
    let min = arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log(minValue([2,6,4,9,6,1,7,9]));
function removeDuplicates(arr){
    const uniqueArray = [];
    for(i=0; i<arr.length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([2,4,7,4,7,3,6,2,4,5,8,9,5,3,2,1,6,8,9,7,6,5,5,4,4,3,2,1,1,1,1,5]));
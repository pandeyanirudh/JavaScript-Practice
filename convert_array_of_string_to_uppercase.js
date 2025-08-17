function toUpperCaseArray(arr){
    const upperCaseArray = [];
    for(let i=0; i<arr.length; i++){
        upperCaseArray[i] = arr[i].toUpperCase();
    }
    return upperCaseArray;
}
console.log(toUpperCaseArray(['good','for','health']));



function arrayUpperCase(arr){
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}
console.log(arrayUpperCase(['good','for','goal']))
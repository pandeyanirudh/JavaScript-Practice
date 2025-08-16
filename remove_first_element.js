//1st method
let arr = [10,20,30,40,50];
arr = arr.slice(1);
console.log(arr);

//2nd method using function
function removeElement (arr){
    arr = arr.slice(1);
    return arr;
}
console.log(removeElement([100,200,300,400,500]));

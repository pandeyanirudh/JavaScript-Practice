function isPallindrome(str){
    // first split then reverse then join
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPallindrome("NUN"));
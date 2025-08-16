function countChar(str, char){
    return str.toLowerCase().split(char).length - 1;
}
console.log(countChar("Amsterdam","a"))


// eg. 1
//"amsterdam".split("a")
// → ["", "msterd", "m"]
 

//eg 2.
// "amstardam".split("a")
// → ["", "mst", "rd", "m"]
// ["", "mst", "rd", "m"] → length = 4


// eg 3.
// "javascript".split("a")
// → ["j", "v", "script"]


// 2nd method using foor loop
function countChar(str, char){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase()===char){
            count++;
        }
    }
    return count;
}
console.log(countChar("Amsterdam","a"));
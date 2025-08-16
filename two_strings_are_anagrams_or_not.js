function areAnagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

let count1 = {}
let count2 = {}

// count frequency of each characters in str1
for(let i=0; i<str1.length; i++){
    let char = str1[i];
    count1[char]=(count1[char] || 0) + 1;
}

// count frequenct of each character in str2 
for(let i=0; i<str2.length; i++){
    let char = str2[i];
    count2[char] = (count2[char] || 0) + 1;
}

// compare the two frequencies object
for(let char in count1){
    if(count1[char] !== count2[char]){
        return false;
    }
}
return true;
}
console.log(areAnagrams("Amsterdam","atmsrAmed"));
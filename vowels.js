function vowels(str){
    let count = 0;
    let vowels = 'aeiou';
    for(i=0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(vowels('AaEeIiOoyHgRGHhNUu'));
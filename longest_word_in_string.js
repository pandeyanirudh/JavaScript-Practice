function longestWord(str){
    // if didnt use space between split(' ') this then they cannot take complete word they took only single letter
   const words = str.split(' ');
   let longest = '';
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("Hello I am ANI I lives in Amesterdam"));
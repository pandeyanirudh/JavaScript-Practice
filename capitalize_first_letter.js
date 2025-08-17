function capitalize(sentence){
    const word = sentence.split(' ');
    for(i=0; i< word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(' ');
}
console.log(capitalize("hello i am javascript"));

// The slice() method returns selected elements in a new array.

//array.slice(start, end)



function cap(sent){ // i want to be rich like elon musk
    word = sent.split(' ');
    for(i=0; i<word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
return word.join(' ');
}
console.log(cap("i want to be rich like elon musk"));
function abc (name, callback){
    callback(`Hello ${name}`);
}
abc('John',message => {
    console.log(message)
});
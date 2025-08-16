class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a noise`);
    }
}
let dog = new Animal("Dog");
dog.speak();
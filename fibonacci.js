function fibonacci(n){
    let num1=0, num2=1, nextNum;

    console.log("Fibonacci Sequence");

    for(let i=1; i<=n; i++){
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}
fibonacci(7);

// The Fibonacci sequence is a type series where each number is the sum of the two that precede it.
// It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.
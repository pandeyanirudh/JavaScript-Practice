function factorial(num){
    let answer=1;
    for(let i=2; i<=num; i++){
        answer *= i;
    }
    return answer;
}
console.log(factorial(4));

function fact(val){
   let ans = 1;
for(i=2; i<=val; i++){
    ans *= i; 
}
return ans;
}
console.log(fact(5));
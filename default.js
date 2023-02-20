function add(first, second){
    /* if(second === undefined){
        second = 0;
    } */
    second = second || 0;
    console.log(first, second);
    const total = first + second;
    
    return total;

}
const result = add(25)
console.log(result);

// second way
function sum(sum1 = 0, sum2= 0){
    console.log(sum1, sum2);
    const total1 = sum1 + sum2;
    return total1;
}

const result1 = sum(56);
console.log("second result1 = ", result1);
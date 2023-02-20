const numbers = (21, 20, 58, 46 ,28 ,46);
const max = Math.max(numbers)
console.log('Max number = ', max);


const sums = [25, 65, 48, 27];
const number = Math.max(...sums);
console.log("Largest number = ",number);

const counts = [25,36,12,28,49,67,65];
const lowest = Math.min(...counts);
console.log("lowest number = ", lowest);


function getSum(a, b=9){
    return a+b;
} console.log(getSum(2, 7));

const y = x => x*x;
 const z = y(5);
 console.log(z);
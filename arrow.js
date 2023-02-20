function add(first, second){
    return first + second;
}

const result = add(10, 15);
console.log('first system = ',result);

const add1 = function(third, fourth){
    return third + fourth;
}
const result1 = add1(20, 10);
console.log("second system = ",result1);

const add2 = (fifth, sixth) => fifth + sixth;
const result2 = add2(35, 14);
console.log("Third system = ",result2);

// no  parameter 
const getPie = () => 3.14;

// One parameter
const doubleIt = (num) => num * 2;

//One parameter simple version
const fiveTimes = num => num *5;

//multiline arrow function
const doMatch = (x,y,z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}

const name = 'Hero'; 
const greetings = 'Welcome Home!'+' '+name;
const greeting = `welcome Home ! ${name}`
console.log(greeting);


const division= num1, num2 => console.log(num1 /num2)
 division(4,2)


function sum(a,b) {
    return result = a + b;
}
console.log(sum(2,3));

function subtraction(a,b) {
    return result = a - b;
}
console.log(subtraction(2,3));

function addition(a,b) {
    return result = a + b;
}
console.log(addition(2,3));

function multiplication(a,b) {
    return result = a * b;
}
console.log(multiplication(2,3));

function division(a,b) {
    return result = a / b;
}
console.log(division(2,3));

function exponentiation(a,b) {
return result = a ** b;
}
console.log(exponentiation(2,3));

 // function pow(a,b) {
 //     let result = 1;
 //     for (let i = 0; i < b; i++) {
 //         result *= a;
 //     }
 //     return result
 // }
 // console.log(pow(2,3));

 function pow(a,b) {
     if (b === 1) {
         return a;
     } else {
         return a * pow(a, b - 1);
     }
 }
 console.log(pow(2,4));
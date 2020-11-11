"use strict";
/* Accepts a positive whole number and returns all divisors of that number*/
function allDivisors(dividend) {
    if (dividend <= 0 || dividend % 1 !== 0) return "Please provide a positive, whole number.";
    let divisors = [];
    for (let i = 1; i <= dividend; i++) {
        if (dividend % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai09 = bai09;
// Bài 9: Filter even numbers
async function bai09() {
    console.log("Bài 9");
    const numbers = [1, 2, 3, 4, 5, 6];
    const filterEvens = new Promise((resolve) => {
        setTimeout(() => resolve(numbers.filter((n) => n % 2 === 0)), 1000);
    });
    console.log("Even numbers:", await filterEvens);
}

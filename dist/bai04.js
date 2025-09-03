"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai04 = bai04;
// Bài 4: Handle Promise that returns random number
async function bai04() {
    console.log("Bài 4");
    const randomNumber = new Promise((resolve) => {
        resolve(Math.floor(Math.random() * 100));
    });
    try {
        console.log("Random number:", await randomNumber);
    }
    catch (err) {
        console.error(err);
    }
}

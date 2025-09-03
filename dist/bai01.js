"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai01 = bai01;
// Bài 1: Create a Promise that returns the string "Hello Async" after 2 seconds.
async function bai01() {
    console.log("Bài 1");
    const helloAsync = new Promise((resolve) => {
        setTimeout(() => resolve("Hello Async"), 2000);
    });
    console.log(await helloAsync);
}

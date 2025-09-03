"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai11 = bai11;
// Bài 11: Convert Exercise 1 into async/await
async function bai11() {
    console.log("Bài 11");
    async function helloAsync() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Hello Async (await)"), 2000);
        });
    }
    console.log(await helloAsync());
}

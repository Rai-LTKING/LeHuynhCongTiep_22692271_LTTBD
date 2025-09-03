"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai17 = bai17;
// Bài 17: Use for await...of
async function bai17() {
    console.log("Bài 17");
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve("A"), 500)),
        new Promise((resolve) => setTimeout(() => resolve("B"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("C"), 1500)),
    ];
    for await (const result of promises) {
        console.log("Result:", result);
    }
}

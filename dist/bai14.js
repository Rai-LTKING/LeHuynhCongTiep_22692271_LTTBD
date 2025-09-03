"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai14 = bai14;
// Bài 14: async function waits 1s and returns number × 3
async function bai14() {
    console.log("Bài 14");
    async function multiplyBy3(num) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(num * 3), 1000);
        });
    }
    console.log(await multiplyBy3(5));
}

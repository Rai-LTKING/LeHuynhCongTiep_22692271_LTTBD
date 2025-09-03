"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai22 = bai22;
// Bài 22: Call API multiple times
async function bai22() {
    console.log("Bài 22");
    const ids = [1, 2, 3];
    for (const id of ids) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json();
        console.log("Todo:", data);
    }
}

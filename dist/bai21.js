"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai21 = bai21;
// Bài 21: fetch API (GET)
async function bai21() {
    console.log("Bài 21");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Todo:", data);
}

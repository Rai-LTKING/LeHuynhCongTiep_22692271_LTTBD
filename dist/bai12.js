"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai12 = bai12;
// Bài 12: async simulateTask(2000)
async function bai12() {
    console.log("Bài 12");
    async function simulateTask(time) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(`Task done in ${time}ms`), time);
        });
    }
    console.log(await simulateTask(2000));
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai05 = bai05;
// Bài 5: simulateTask(time)
async function bai05() {
    console.log("Bài 5");
    function simulateTask(time) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(`Task done in ${time}ms`), time);
        });
    }
    console.log(await simulateTask(1000));
}

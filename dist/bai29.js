"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai29 = bai29;
// Bài 29: queueProcess sequentially
async function bai29() {
    console.log("Bài 29");
    function asyncTask(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(`Task ${id} done`), 1000);
        });
    }
    for (const id of [1, 2, 3, 4, 5]) {
        const result = await asyncTask(id);
        console.log(result);
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai28 = bai28;
// Bài 28: batchProcess with Promise.all
async function bai28() {
    console.log("Bài 28");
    function asyncTask(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(`Task ${id} done`), 1000 * id);
        });
    }
    const results = await Promise.all([1, 2, 3, 4, 5].map((id) => asyncTask(id)));
    console.log("Batch results:", results);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai30 = bai30;
// Bài 30: Promise.allSettled
async function bai30() {
    console.log("Bài 30");
    function apiCall(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5)
                    resolve(`API ${id} success`);
                else
                    reject(`API ${id} failed`);
            }, 1000);
        });
    }
    const results = await Promise.allSettled([apiCall(1), apiCall(2), apiCall(3)]);
    console.log("AllSettled results:", results);
}

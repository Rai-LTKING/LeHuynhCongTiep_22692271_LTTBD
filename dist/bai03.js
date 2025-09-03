"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai03 = bai03;
// Bài 3: Reject a Promise with error after 1s
async function bai03() {
    console.log("Bài 3");
    function throwError() {
        return new Promise((_, reject) => {
            setTimeout(() => reject("Something went wrong"), 1000);
        });
    }
    try {
        await throwError();
    }
    catch (err) {
        console.error("Error:", err);
    }
}

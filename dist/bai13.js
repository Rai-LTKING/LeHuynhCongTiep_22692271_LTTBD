"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai13 = bai13;
// Bài 13: Handle errors with try/catch
async function bai13() {
    console.log("Bài 13");
    async function throwError() {
        return new Promise((_, reject) => {
            setTimeout(() => reject("Something went wrong (async/await)"), 1000);
        });
    }
    try {
        console.log(await throwError());
    }
    catch (err) {
        console.error("Caught error:", err);
    }
}

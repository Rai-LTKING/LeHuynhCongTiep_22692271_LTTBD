"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai02 = bai02;
// Bài 2: Function returning a Promise resolving with 10 after 1s
async function bai02() {
    console.log("Bài 2");
    function getNumber() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(10), 1000);
        });
    }
    console.log(await getNumber());
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai26 = bai26;
// Bài 26: async/await + setTimeout (5s wait)
async function bai26() {
    console.log("Bài 26");
    function wait5s() {
        return new Promise((resolve) => setTimeout(resolve, 5000));
    }
    await wait5s();
    console.log("Waited 5 seconds!");
}

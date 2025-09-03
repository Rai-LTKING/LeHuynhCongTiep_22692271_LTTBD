"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai25 = bai25;
// Bài 25: simulate file download
async function bai25() {
    console.log("Bài 25");
    function downloadFile() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("File downloaded!"), 3000);
        });
    }
    console.log(await downloadFile());
}

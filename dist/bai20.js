"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai20 = bai20;
// Bài 20: Add timeout for API call
async function bai20() {
    console.log("Bài 20");
    async function fetchUserWithTimeout(id, timeout = 2000) {
        const apiCall = new Promise((resolve) => {
            setTimeout(() => resolve({ id, name: `User${id}` }), 3000); // giả sử lâu hơn timeout
        });
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Timeout!"), timeout);
        });
        return Promise.race([apiCall, timeoutPromise]);
    }
    try {
        console.log(await fetchUserWithTimeout(1));
    }
    catch (err) {
        console.error("Error:", err);
    }
}

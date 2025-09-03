"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai18 = bai18;
// Bài 18: Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second). 
async function bai18() {
    console.log("Bài 18");
    async function fetchUser(id) {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ id, name: `User${id}` }), 1000);
        });
    }
    console.log(await fetchUser(1));
}

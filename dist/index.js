"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello TypeScript');
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
const bai09_1 = require("./bai09");
const bai10_1 = require("./bai10");
async function runAll() {
    await (0, bai01_1.bai01)();
    await (0, bai02_1.bai02)();
    await (0, bai03_1.bai03)();
    await (0, bai04_1.bai04)();
    await (0, bai05_1.bai05)();
    await (0, bai06_1.bai06)();
    await (0, bai07_1.bai07)();
    await (0, bai08_1.bai08)();
    await (0, bai09_1.bai09)();
    await (0, bai10_1.bai10)();
}
runAll();

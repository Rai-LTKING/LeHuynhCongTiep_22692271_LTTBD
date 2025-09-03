console.log('Hello TypeScript');
import { bai01 } from "./bai01";
import { bai02 } from "./bai02";
import { bai03 } from "./bai03";
import { bai04 } from "./bai04";
import { bai05 } from "./bai05";
import { bai06 } from "./bai06";
import { bai07 } from "./bai07";
import { bai08 } from "./bai08";
import { bai09 } from "./bai09";
import { bai10 } from "./bai10";

async function runAll() {
  await bai01();
  await bai02();
  await bai03();
  await bai04();
  await bai05();
  await bai06();
  await bai07();
  await bai08();
  await bai09();
  await bai10();
}

runAll();

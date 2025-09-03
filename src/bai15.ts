// Bài 15: Call multiple async functions sequentially
export async function bai15() {
  console.log("Bài 15");
  async function task(num: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num * 2), 1000);
    });
  }

  const a = await task(1);
  console.log("Task1:", a);

  const b = await task(2);
  console.log("Task2:", b);

  const c = await task(3);
  console.log("Task3:", c);
}

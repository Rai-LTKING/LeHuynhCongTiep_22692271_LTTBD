// Bài 16: Call multiple async functions in parallel
export async function bai16() {
  console.log("Bài 16");
  async function task(num: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num * 2), 1000);
    });
  }
  const results = await Promise.all([task(1), task(2), task(3)]);
  console.log("Parallel results:", results);
}

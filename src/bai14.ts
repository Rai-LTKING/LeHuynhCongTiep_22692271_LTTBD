// Bài 14: async function waits 1s and returns number × 3
export async function bai14() {
  console.log("Bài 14");
  async function multiplyBy3(num: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num * 3), 1000);
    });
  }
  console.log(await multiplyBy3(5));
}

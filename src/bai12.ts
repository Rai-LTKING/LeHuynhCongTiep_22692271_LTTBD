// Bài 12: async simulateTask(2000)
export async function bai12() {
  console.log("Bài 12");
  async function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Task done in ${time}ms`), time);
    });
  }
  console.log(await simulateTask(2000));
}

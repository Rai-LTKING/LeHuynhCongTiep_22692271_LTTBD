// Bài 6: Promise.all
export async function bai06() {
  console.log("Bài 6");
  function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Task done in ${time}ms`), time);
    });
  }
  const results = await Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000),
  ]);
  console.log("Promise.all results:", results);
}

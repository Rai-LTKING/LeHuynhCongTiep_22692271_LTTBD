// Bài 7: Promise.race
export async function bai07() {
  console.log("Bài 7");
  function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Task done in ${time}ms`), time);
    });
  }
  const result = await Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000),
  ]);
  console.log("Promise.race result:", result);
}

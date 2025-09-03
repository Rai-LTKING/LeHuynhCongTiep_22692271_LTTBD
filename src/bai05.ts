// Bài 5: simulateTask(time)
export async function bai05() {
  console.log("Bài 5");
  function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Task done in ${time}ms`), time);
    });
  }
  console.log(await simulateTask(1000));
}

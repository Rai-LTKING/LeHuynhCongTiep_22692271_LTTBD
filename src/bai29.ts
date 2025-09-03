// Bài 29: queueProcess sequentially
export async function bai29() {
  console.log("Bài 29");
  function asyncTask(id: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Task ${id} done`), 1000);
    });
  }

  for (const id of [1, 2, 3, 4, 5]) {
    const result = await asyncTask(id);
    console.log(result);
  }
}

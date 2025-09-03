// Bài 28: batchProcess with Promise.all
export async function bai28() {
  console.log("Bài 28");
  function asyncTask(id: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Task ${id} done`), 1000 * id);
    });
  }
  const results = await Promise.all([1, 2, 3, 4, 5].map((id) => asyncTask(id)));
  console.log("Batch results:", results);
}

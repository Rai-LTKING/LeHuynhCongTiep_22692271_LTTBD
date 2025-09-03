// Bài 11: Convert Exercise 1 into async/await
export async function bai11() {
  console.log("Bài 11");
  async function helloAsync(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Hello Async (await)"), 2000);
    });
  }
  console.log(await helloAsync());
}

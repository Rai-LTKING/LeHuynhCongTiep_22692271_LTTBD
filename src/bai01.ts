// Bài 1: Create a Promise that returns the string "Hello Async" after 2 seconds.
export async function bai01() {
  console.log("Bài 1");
  const helloAsync = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
  console.log(await helloAsync);
}

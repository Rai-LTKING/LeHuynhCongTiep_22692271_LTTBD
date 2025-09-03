// Bài 3: Reject a Promise with error after 1s
export async function bai03() {
  console.log("Bài 3");
  function throwError(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Something went wrong"), 1000);
    });
  }
  try {
    await throwError();
  } catch (err) {
    console.error("Error:", err);
  }
}

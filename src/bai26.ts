// Bài 26: async/await + setTimeout (5s wait)
export async function bai26() {
  console.log("Bài 26");
  function wait5s(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 5000));
  }
  await wait5s();
  console.log("Waited 5 seconds!");
}

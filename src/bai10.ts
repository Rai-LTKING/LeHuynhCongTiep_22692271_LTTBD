// Bài 10: finally()
export async function bai10() {
  console.log("Bài 10");
  await new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => (success ? resolve("Success!") : reject("Failure!")), 1000);
  })
    .then((msg) => console.log("Result:", msg))
    .catch((err) => console.error("Error:", err))
    .finally(() => console.log("Done"));
}

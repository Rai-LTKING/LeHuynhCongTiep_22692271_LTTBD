// Bài 8: Promise chain
export async function bai08() {
  console.log("Bài 8");
  const result = await Promise.resolve(2)
    .then((n) => n * n)
    .then((n) => n * 2)
    .then((n) => n + 5);
  console.log("Chain result:", result);
}

// Bài 4: Handle Promise that returns random number
export async function bai04() {
  console.log("Bài 4");
  const randomNumber = new Promise<number>((resolve) => {
    resolve(Math.floor(Math.random() * 100));
  });
  try {
    console.log("Random number:", await randomNumber);
  } catch (err) {
    console.error(err);
  }
}

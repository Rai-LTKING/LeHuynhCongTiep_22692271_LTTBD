// Bài 2: Function returning a Promise resolving with 10 after 1s
export async function bai02() {
  console.log("Bài 2");
  function getNumber(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(10), 1000);
    });
  }
  console.log(await getNumber());
}

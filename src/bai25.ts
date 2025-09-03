// Bài 25: simulate file download
export async function bai25() {
  console.log("Bài 25");
  function downloadFile(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("File downloaded!"), 3000);
    });
  }
  console.log(await downloadFile());
}

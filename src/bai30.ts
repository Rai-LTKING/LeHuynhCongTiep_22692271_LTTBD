// Bài 30: Promise.allSettled
export async function bai30() {
  console.log("Bài 30");
  function apiCall(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) resolve(`API ${id} success`);
        else reject(`API ${id} failed`);
      }, 1000);
    });
  }

  const results = await Promise.allSettled([apiCall(1), apiCall(2), apiCall(3)]);
  console.log("AllSettled results:", results);
}

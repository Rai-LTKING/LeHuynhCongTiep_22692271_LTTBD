// Bài 20: Add timeout for API call
export async function bai20() {
  console.log("Bài 20");
  async function fetchUserWithTimeout(id: number, timeout = 2000) {
    const apiCall = new Promise<{ id: number; name: string }>((resolve) => {
      setTimeout(() => resolve({ id, name: `User${id}` }), 3000); // giả sử lâu hơn timeout
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Timeout!"), timeout);
    });

    return Promise.race([apiCall, timeoutPromise]);
  }

  try {
    console.log(await fetchUserWithTimeout(1));
  } catch (err) {
    console.error("Error:", err);
  }
}

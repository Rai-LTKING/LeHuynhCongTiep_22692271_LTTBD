// Bài 27: fetchWithRetry
export async function bai27() {
  console.log("Bài 27");
  async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let i = 0; i <= retries; i++) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetch failed");
        return await res.json();
      } catch (err) {
        console.error(`Attempt ${i + 1} failed`);
        if (i === retries) throw err;
      }
    }
  }
  const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
  console.log("Fetch result:", data);
}

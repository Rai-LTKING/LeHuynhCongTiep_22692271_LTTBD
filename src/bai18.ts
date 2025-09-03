// Bài 18: Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second). 
export async function bai18() {
  console.log("Bài 18");
  async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id, name: `User${id}` }), 1000);
    });
  }
  console.log(await fetchUser(1));
}

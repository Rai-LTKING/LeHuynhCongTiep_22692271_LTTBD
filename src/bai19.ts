// Bài 19: Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID. 
export async function bai19() {
  console.log("Bài 19");
  async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id, name: `User${id}` }), 1000);
    });
  }

  async function fetchUsers(ids: number[]) {
    const users = [];
    for (const id of ids) {
      users.push(await fetchUser(id));
    }
    return users;
  }

  console.log(await fetchUsers([1, 2, 3]));
}

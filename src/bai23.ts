// Bài 23: Fetch todos and filter completed
export async function bai23() {
  console.log("Bài 23");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: any[] = await res.json();
  const completed = todos.filter((t) => t.completed);
  console.log("Completed todos:", completed.slice(0, 5)); // log vài cái cho gọn
}

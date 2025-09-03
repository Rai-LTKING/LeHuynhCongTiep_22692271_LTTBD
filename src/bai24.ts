// Bài 24: POST request
export async function bai24() {
  console.log("Bài 24");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  });
  const data = await res.json();
  console.log("Post response:", data);
}

export async function deletePost(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // parse the response so that we can get data
  const data = await response.json();

  console.log("Deleted the post with id:", postId);

  return data;
}

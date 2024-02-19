import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { TPost } from "../types";

export function PostList() {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData: TPost[]) => {
        setPosts(jsonData);
      })
      .catch((error) => {
        console.log("Error when fetching data from server", error);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {posts.map((post) => {
        return (
          <PostCard key={post.id} title={post.title} description={post.body} />
        );
      })}
    </div>
  );
}

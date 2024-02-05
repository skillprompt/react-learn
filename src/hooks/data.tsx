import { useEffect, useState } from "react";

export function Data() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // get, post, patch, put, delete
      method: "GET",
    })
      .then((response) => {
        const parsed = response.json();
        parsed.then((data) => {
          console.log("data from server", data);
          setPosts(data);
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(fetchPosts, []);

  return (
    <div>
      <h1>Data loading from backend</h1>

      <div>
        {/* Show the 100 posts */}
        {JSON.stringify(posts)}
      </div>
    </div>
  );
}

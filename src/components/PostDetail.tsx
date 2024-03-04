import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../data/fetch-post-by-id";
import { TComment, TPost } from "../types";
import { useQuery } from "@tanstack/react-query";

export function PostDetail() {
  const params = useParams();
  const postId = parseInt(params.postId || "");
  const [post, setPost] = useState<TPost | null>(null);

  if (postId) {
    return <Post postId={postId} post={post} setPost={setPost} />;
  }

  return <div>Post id not found</div>;
}

function Post({
  post,
  setPost,
  postId,
}: {
  postId: number;
  post: TPost | null;
  setPost: React.Dispatch<React.SetStateAction<TPost | null>>;
}) {
  const { data, error, isLoading } = useQuery<TComment[]>({
    queryKey: ["getComments", postId],
    queryFn: async () => {
      // // throw new Error("failed fetching...");
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     // resolve({
      //     //   comments: [],
      //     // });
      //     reject({
      //       message: "hello",
      //     });
      //   }, 2000);
      // });

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // parse the response so that we can get data
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch from server");
      }
    },
  });

  useEffect(() => {
    async function fetchPost() {
      const result = await getPostById(postId);
      // ui logic here
      setPost(result);
    }
    fetchPost();
  }, [postId]);

  if (isLoading) {
    return <p>Comment Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
      <div>
        <h3>Comments</h3>
        {data?.map((comment) => {
          return (
            <div key={comment.id}>
              <h4>{comment.email}</h4>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

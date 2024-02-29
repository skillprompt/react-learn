import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../data/fetch-post-by-id";
import { TComment, TPost } from "../types";
import { fetchComments } from "../data/fetch-comments";

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
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    async function fetchPost() {
      const result = await getPostById(postId);
      // ui logic here
      setPost(result);
    }
    fetchPost();
  }, [postId]);

  useEffect(() => {
    async function fetchCommentsFn() {
      const comments = await fetchComments(postId);
      setComments(comments);
    }
    fetchCommentsFn();
  }, []);

  return (
    <div>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
      <div>
        <h3>Comments</h3>

        {comments.map((comment) => {
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

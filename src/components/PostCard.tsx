import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { deletePost } from "../data/delete-post";
import { TPost } from "../types";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export function PostCard(props: {
  title: string;
  description: string;
  postId: number;
  setPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
  posts: TPost[];
}) {
  // const [isDeleting, setIsDeleting] = useState(false);

  const deletePostMutation = useMutation({
    // mutationFn: async () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       reject({
    //         message: "delete failed",
    //       });
    //     }, 2000);
    //   });
    // },
    mutationFn: async (body: { postId: number }) => {
      const res = await deletePost(body.postId);
      return res;
    },
    onSuccess(data) {
      console.log("success data", data);
    },
    onError(error) {
      console.log("delete error", error);
    },
  });

  // TODO: make an state for error message

  const handlePostDelete = async (postId: number) => {
    await deletePostMutation.mutateAsync({
      postId,
    });

    // // set the isDeleting state to true
    // setIsDeleting(true);

    // // make api call to the backend to delete the post
    // try {
    //   await deletePost(postId);

    //   // remove the post from the UI
    //   const filteredPosts = props.posts.filter((post) => post.id !== postId);
    //   props.setPosts(filteredPosts);
    // } catch (error) {
    //   console.log("Error when deleting the post with id:", postId, error);

    //   // TODO: set the message that is shown to the user
    // }

    // // set the isDeleting state to false
    // setIsDeleting(false);
  };

  return (
    <div
      style={{
        border: "2px solid #eee",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <Link to={`/posts/${props.postId}`}>
        <h2
          style={{
            color: "#aaa",
          }}
        >
          {props.title}
        </h2>
      </Link>
      <p
        style={{
          color: "#000",
        }}
      >
        {props.description}
      </p>

      {deletePostMutation.isPending ? (
        <p>Loading...</p>
      ) : (
        <button
          onClick={() => {
            handlePostDelete(props.postId);
          }}
        >
          <MdDelete height={24} width={24} fill="red" />
          Delete
        </button>
      )}

      {/* TODO: show the error message here and make it red */}
      {deletePostMutation.isSuccess ? null : (
        <p>{deletePostMutation.error?.message}</p>
      )}
    </div>
  );
}

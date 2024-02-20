import { MdDelete } from "react-icons/md";
import { deletePost } from "../data/delete-post";

export function PostCard(props: {
  title: string;
  description: string;
  postId: number;
}) {
  const handlePostDelete = async (postId: number) => {
    // make api call to the backend to delete the post
    await deletePost(postId);
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
      <h2
        style={{
          color: "#aaa",
        }}
      >
        {props.title}
      </h2>
      <p
        style={{
          color: "#000",
        }}
      >
        {props.description}
      </p>
      <button
        onClick={() => {
          handlePostDelete(props.postId);
        }}
      >
        <MdDelete height={24} width={24} fill="red" />
        Delete
      </button>
    </div>
  );
}

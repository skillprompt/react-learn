import { PostCard } from "./PostCard";

export function PostList() {
  return (
    <div>
      <PostCard
        title="Post one"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
        sapiente architecto dignissimos? Quae rerum cupiditate excepturi error
        libero qui dolores minus. Voluptatum, alias. Earum, ipsam voluptas
        perspiciatis eaque similique rerum!"
        createdBy="Ram"
        date={new Date("2022-01-12")}
      />
      <PostCard
        title="Post two"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
      sapiente architecto dignissimos? Quae rerum cupiditate excepturi error
      libero qui dolores minus. Voluptatum, alias. Earum, ipsam voluptas
      perspiciatis eaque similique rerum!"
        createdBy="Hari"
        date={new Date("2023-01-12")}
      />

      <PostCard
        title="Post three"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
      sapiente architecto dignissimos? Quae rerum cupiditate excepturi error
      libero qui dolores minus. Voluptatum, alias. Earum, ipsam voluptas
      perspiciatis eaque similique rerum!"
        createdBy="Hari"
        date={new Date("2024-01-12")}
      />
    </div>
  );
}

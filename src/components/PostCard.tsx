export function PostCard(props: {
  title: string;
  description: string;
  createdBy: string;
  date: Date;
}) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Created By: {props.createdBy}</p>
      <p>Date: {props.date.toISOString()}</p>
    </div>
  );
}

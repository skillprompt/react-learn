export function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <a
        style={{
          border: "1px solid red",
          padding: "5px",
        }}
        href="/"
      >
        Home
      </a>
      <a
        style={{
          border: "1px solid red",
          padding: "5px",
        }}
        href="/posts"
      >
        Posts
      </a>
      <a
        style={{
          border: "1px solid red",
          padding: "5px",
        }}
        href="/posts/1"
      >
        Post number 1 detail
      </a>
      <a
        style={{
          border: "1px solid red",
          padding: "5px",
        }}
        href="/posts/1/edit"
      >
        Post number 1 edit
      </a>
      <a
        style={{
          border: "1px solid red",
          padding: "5px",
        }}
        href="/does-not-exist"
      >
        Path not exist
      </a>
    </div>
  );
}

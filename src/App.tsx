import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const pathname = location.pathname;

  if (pathname === "/posts") {
    return (
      <div>
        <Navbar />
        <h2>show list of posts</h2>
      </div>
    );
  }

  // e.g. "/posts/1/edit"
  if (pathname.includes("/edit")) {
    return (
      <div>
        <h2>Show a form to edit the post</h2>
        <Navbar />
      </div>
    );
  }

  // e.g. "/posts/1" or "/posts/5"
  if (pathname.includes("/posts/")) {
    return (
      <div>
        <Navbar />
        <h2>Show the detail post along with its comments</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h2>Component not found</h2>
    </div>
  );
}

export default App;

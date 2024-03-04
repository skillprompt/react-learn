import "./App.css";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { PostDetail } from "./components/PostDetail";
import { PostList } from "./components/PostList";
import { TodosList } from "./components/TodosList";
import { PostPaginationProvider } from "./store/pagination-posts";
import { ProfileMainComponent } from "./components/Profile/ProfileMainComponent";
import { UserCtxProvider } from "./store/user-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <PostList />
          </div>
        ),
      },
      {
        path: "/posts",
        element: (
          <div>
            <PostPaginationProvider>
              <PostList />
            </PostPaginationProvider>
          </div>
        ),
      },
      {
        path: "/todos",
        element: <TodosList />,
      },
    ],
  },

  {
    path: "/posts/:postId",
    element: <PostDetail />,
  },
  {
    path: "/profile",
    element: (
      <UserCtxProvider>
        <ProfileMainComponent />
      </UserCtxProvider>
    ),
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

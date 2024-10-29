import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Components/Game/Game";
import About from "./Components/About/About";
import App from "./App";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: (
      <div>
        <h1>OOPS !!</h1>
      </div>
    ),
    children: [
      {
        path: "/game",
        element: <Game></Game>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

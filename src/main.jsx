import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Timeline from "./pages/Timeline.jsx";
import TodoDetail from "./pages/TodoDetail.jsx";
import AddTodo from "./pages/AddTodo.jsx";
import History from "./pages/History.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/detail/:id",
    element: <TodoDetail />,
  },
  {
    path: "/add",
    element: <AddTodo />,
  },
  {
    path: "/history",
    element: <History/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

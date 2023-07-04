import React from "react";
import ReactDOM from "react-dom/client";

import { TodoApp } from "./App.jsx";
import TodoProvider from "./context/TodoContext";


ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  </React.StrictMode>
);

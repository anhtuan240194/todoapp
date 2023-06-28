import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoApp} from "./App.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
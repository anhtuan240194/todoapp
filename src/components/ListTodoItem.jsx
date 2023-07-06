import { FormControlLabel, Checkbox } from "@mui/material";
import { useTodo } from "../hooks/useTodo";
import { useState } from "react";

export default function ListTodoItem() {
  const { todos, removeTodo, toggleStatus } = useTodo();
  const items = todos.map((todo) => (
    <div className="item_list_todos" key={todo.id} id={todo.id}>
      <FormControlLabel
        className="item-todo"
        control={<Checkbox />}
        label={todo.title}
        checked={todo.completed}
        onChange={() => toggleStatus(todo.id)}
      />
      <div className="remove_todo" onClick={() => removeTodo(todo.id)}>
        Xóa
      </div>
    </div>
  ));
  return <>{items}</>;
}

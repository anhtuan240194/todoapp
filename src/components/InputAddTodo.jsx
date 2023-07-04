import { TextField, Button } from "@mui/material";
import { useState } from "react";
import {useTodo} from "../hooks/useTodo"

export default function InputAddTodo() {
  const [input, setInput] = useState("");
  const {createTodo} = useTodo();
  
  function handleSubmit(e) {
    e.preventDefault();
    createTodo(input); //Tạo mới todo, hàm này lấy trong TodoPRovider
    setInput("");
  }
  return (
    <form className="input-todo" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        size="small"
        className="input_todo"
        label="Bạn muốn làm gì?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" variant="contained" className="add-todo">
        Thêm
      </Button>
    </form>
  );
}

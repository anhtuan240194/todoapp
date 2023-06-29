import { TextField, Button } from "@mui/material";
import {useState} from "react"
export default function InputAddTodo({ onSubmit }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
    setInput("")
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

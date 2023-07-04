import { Button } from "@mui/material";
import {useTodo} from "../hooks/useTodo"

/**
 * Hiển thị số lượng todo chưa hoàn thành, clear all todo
 *
 * @param {todos} todos - Mảng các object todos
 */
export default function FooterTodo({ removeAllTodos }) {
  const {todos} = useTodo();
  const num = todos.filter((todo) => !todo.completed).length || 0;
  return (
    <div className="total-todo">
      <span className="total">You have {num} pending todos</span>
      <Button
        variant="contained"
        className="clear-todo"
        onClick={removeAllTodos}
      >
        Xóa tất cả
      </Button>
    </div>
  );
}

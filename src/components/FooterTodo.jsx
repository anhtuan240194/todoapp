import { Button } from "@mui/material";

/**
 * Hiển thị số lượng todo chưa hoàn thành, clear all todo
 *
 * @param {todos} todos - Mảng các object todos
 */
export default function FooterTodo({ todos }) {
  const num = todos.filter((todo) => !todo.completed).length;
  return (
    <div className="total-todo">
      <span className="total">You have {num} pending todos</span>
      <Button variant="contained" className="clear-todo">
        Xóa tất cả
      </Button>
    </div>
  );
}

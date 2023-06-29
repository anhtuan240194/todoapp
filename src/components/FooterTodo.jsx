import { Button } from "@mui/material";
export default function FooterTodo({todos}) {
  const num = todos.filter((todo) => !todo.completed).length
  return (
    <div className="total-todo">
      <span className="total">You have {num} pending todos</span>
      <Button variant="contained" className="clear-todo">
        Xóa tất cả
      </Button>
    </div>
  );
}

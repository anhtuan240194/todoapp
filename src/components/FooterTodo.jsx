import { Button } from "@mui/material";
export default function FooterTodo() {
  return (
    <div className="total-todo">
      <span className="total">You have 4 pending todos</span>
      <Button variant="contained" className="clear-todo">
        Clear All
      </Button>
    </div>
  );
}
